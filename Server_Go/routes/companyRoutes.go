package routes

import (
	"github.com/gorilla/mux"
)

func RegisterCompanyRoutes(r *mux.Router) {
	r.HandleFunc("/get", companyController.getCompany).Name("Get Company")
	r.HandleFunc("/all", companyController.getCompanies).Name("Get Companies")
	r.HandleFunc("/update", companyController.updateCompany).Name("Update Company")
	r.HandleFunc("/create", companyController.createCompany).Name("Create Company")
}
