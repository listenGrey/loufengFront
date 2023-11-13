package pageData

type Item struct {
	Id           string   `bson:"id"`
	Url          string   `bson:"url"`
	Title        string   `bson:"title"`
	ReleaseTime  string   `bson:"releaseTime"`
	FetchingTime string   `bson:"fetchingTime"`
	Province     string   `bson:"province"`
	City         string   `bson:"city"`
	Age          string   `bson:"age"`
	FaceValue    string   `bson:"faceValue"`
	Expenses     string   `bson:"expenses"`
	Services     string   `bson:"services"`
	Pics         []string `bson:"pics"`
	Introduction string   `bson:"introduction"`
}

type PageData struct {
	Total      int64
	Exists     bool
	Pagination []int
	TotalPages int
	Items      []Item
}
type SearchCond struct {
	Kwd      string
	Province string
	City     string
	Age      string
	MinPrice string
	MaxPrice string
	Page     int64
}
