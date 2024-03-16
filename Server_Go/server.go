package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"

	"velocified/lms-backend/routes"
)

func main() {
	r := mux.NewRouter()

	routes.RegisterUserRoutes(r.PathPrefix("/user").Subrouter())
	routes.RegisterPathRoutes(r.PathPrefix("/path").Subrouter())
	routes.RegisterMessageRoutes(r.PathPrefix("/message").Subrouter())
	routes.RegisterCompanyRoutes(r.PathPrefix("/company").Subrouter())
	routes.RegisterActivityRoutes(r.PathPrefix("/activity").Subrouter())

	log.Fatal(http.ListenAndServe(":3100", r))
}
