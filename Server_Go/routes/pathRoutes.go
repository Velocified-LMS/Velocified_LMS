package routes

import (
	"github.com/gorilla/mux"
)

func RegisterPathRoutes(r *mux.Router) {
	r.HandleFunc("/", pathController.getPath).Name("Path Info")
	r.HandleFunc("/company", pathController.getPathsByCompany).Name("Get Paths By Company")
	r.HandleFunc("/create", pathController.createPath).Name("Create Path")
	r.HandleFunc("/update", pathController.updatePath).Name("Update Path")
}
