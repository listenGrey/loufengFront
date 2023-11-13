package controller

import (
	"luofengFront/dao"
	"luofengFront/pageData"
	"luofengFront/view"
	"net/http"
	"strconv"
	"text/template"
)

func ProcessingData(w http.ResponseWriter, r *http.Request) {
	//页面传来的条件
	var kwd pageData.SearchCond

	// 获取搜索关键字
	kwd.Kwd = r.URL.Query().Get("search")
	kwd.Province = r.URL.Query().Get("province")
	kwd.City = r.URL.Query().Get("city")
	kwd.Page, _ = strconv.ParseInt(r.URL.Query().Get("page"), 10, 64)

	// 配置并连接到MongoDB
	var userDB view.UserDB
	userDB.Client, _ = dao.ConnectToMongoDB("mongodb://localhost:27017")
	userDB.Database = "crawler"
	userDB.Collection = "profile"
	userDB.Condition = kwd

	// 符合条件的记录条数
	var total int64
	if kwd.Province == "" || kwd.Province == "全部" {
		total = 50
	} else {
		total = userDB.Count()
	}

	// 符合条件的数据是否存在
	exists := false
	if total > 0 {
		exists = true
	}

	// 获取符合条件的记录
	var items []pageData.Item
	if kwd.Province == "" || kwd.Province == "全部" {
		items = userDB.SearchAll()

	} else {
		items = userDB.Search()
	}

	// 获取当前页码（从查询参数中获取，如果未提供，则默认为第一页）
	if kwd.Page == 0 {
		kwd.Page = 1
	}

	// 计算总页数
	var totalPages int64
	if kwd.Province == "" || kwd.Province == "全部" {
		totalPages = 10
	} else {
		totalPages = (userDB.Count() + view.MaxPage - 1) / view.MaxPage
	}

	// 构建分页页码
	var pagination []int
	for i := 1; i <= int(totalPages); i++ {
		pagination = append(pagination, i)
	}

	data := pageData.PageData{
		Items:      items,
		Total:      total,
		Exists:     exists,
		Pagination: pagination,
		TotalPages: int(totalPages),
	}

	// 读取模板文件
	tmpl, err := template.ParseFiles("/GoProjects/luofengFront/view/html/template.html")
	if err != nil {
		return
	}

	// 将数据应用到模板并将结果写入文件
	err = tmpl.Execute(w, data)
	if err != nil {
		return
	}
}
