package view

import (
	"luofengFront/pageData"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"sync"

	"context"
)

type UserDB struct {
	Client     *mongo.Client
	Database   string
	Collection string
	Condition  pageData.SearchCond
}

const MaxPage = 5

func (d UserDB) Count() int64 {
	userCol := d.Client.Database(d.Database).Collection(d.Collection)

	// 构建查询条件
	filter := bson.D{
		//{"title", primitive.Regex{condition.Kwd, ""}},
		{"province", d.Condition.Province},
		{"city", d.Condition.City},
	}

	count, err := userCol.CountDocuments(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}

	return count
}

func (d UserDB) Search() []pageData.Item {
	userCol := d.Client.Database(d.Database).Collection(d.Collection)

	// 构建查询条件
	filter := bson.D{
		//{"title", primitive.Regex{condition.Kwd, ""}},
		{"province", d.Condition.Province},
		{"city", d.Condition.City},
	}

	// 定义排序条件
	var opts *options.FindOptions
	if d.Condition.Page == 0 {
		opts = options.Find().SetSort(bson.D{{Key: "releaseTime", Value: 1}}).SetLimit(MaxPage).SetSkip(d.Condition.Page * MaxPage)
	} else {
		opts = options.Find().SetSort(bson.D{{Key: "releaseTime", Value: -1}}).SetLimit(MaxPage).SetSkip((d.Condition.Page - 1) * MaxPage)
		// 1 表示升序，-1 表示降序
	}

	// 执行查询
	cursor, err := userCol.Find(context.Background(), filter, opts)
	if err != nil {
		log.Fatal(err)
	}
	defer cursor.Close(context.Background())

	profiles := convertType(cursor)

	return profiles
}

func (d UserDB) SearchAll() []pageData.Item {
	userCol := d.Client.Database(d.Database).Collection(d.Collection)

	filter := bson.M{}
	// 定义排序条件

	var opts *options.FindOptions
	if d.Condition.Page == 0 {
		opts = options.Find().SetSort(bson.D{{Key: "releaseTime", Value: 1}}).SetLimit(MaxPage).SetSkip(d.Condition.Page * MaxPage)
	} else {
		opts = options.Find().SetSort(bson.D{{Key: "releaseTime", Value: -1}}).SetLimit(MaxPage).SetSkip((d.Condition.Page - 1) * MaxPage)
		// 1 表示升序，-1 表示降序
	}

	// 执行查询
	cursor, err := userCol.Find(context.Background(), filter, opts)
	if err != nil {
		log.Fatal(err)
	}
	defer cursor.Close(context.Background())

	profiles := convertType(cursor)

	return profiles
}

func convertType(cursor *mongo.Cursor) []pageData.Item {
	// 使用 WaitGroup 来等待所有 Goroutines 完成
	var wg sync.WaitGroup

	// 使用一个 Channel 来存储查询结果
	resultsChan := make(chan pageData.Item)

	// 启动一个 Goroutine 来读取查询结果并发送到 Channel
	go func() {
		defer close(resultsChan)
		for cursor.Next(context.Background()) {
			var result pageData.Item
			if err := cursor.Decode(&result); err != nil {
				log.Fatal(err)
			}
			resultsChan <- result
		}
	}()

	var profiles []pageData.Item

	// 启动多个 Goroutines 来处理查询结果
	numWorkers := 100
	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for result := range resultsChan {
				// 处理查询结果，例如打印或存储在切片中
				profiles = append(profiles, result)
			}
		}()
	}

	// 等待所有 Goroutines 完成
	wg.Wait()

	return profiles
}
