package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"

	userRoutes "velocified/lms-backend/routes"
)

func main() {
	r := mux.NewRouter()

	userRoutes.RegisterUserRoutes(r.PathPrefix("/user").Subrouter())

	log.Fatal(http.ListenAndServe(":3100", r))
}
