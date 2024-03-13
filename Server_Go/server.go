package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/test/{a}/{b}", func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		a := vars["a"]
		b := vars["b"]

		fmt.Fprintf(w, "You've requested page /test/%s/%s\n", a, b)
	})

	http.ListenAndServe(":8080", r)
}
