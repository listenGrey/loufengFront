package main

import (
	"luofengFront/controller"

	"log"
	"net/http"
)

func main() {
	http.Handle("/css/", http.FileServer(http.Dir("/GoProjects/luofengFront/view")))
	http.Handle("/js/", http.FileServer(http.Dir("/GoProjects/luofengFront/view")))
	http.HandleFunc("/", controller.ProcessingData)
	log.Fatal(http.ListenAndServe(":8888", nil))
}
