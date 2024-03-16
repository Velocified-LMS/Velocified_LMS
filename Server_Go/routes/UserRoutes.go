package userRoutes

import (
	"github.com/gorilla/mux"
)

func RegisterUserRoutes(r *mux.Router) {
	r.HandleFunc("/info", userController.getUser).Name("User Info")
	r.HandleFunc("/create", userController.createUser).Name("Create User")
	r.HandleFunc("/get", userController.getUserByAttribute).Name("Get User")
	r.HandleFunc("/update", userController.updateUser).Name("Update User")
	r.HandleFunc("/register", userController.register).Name("Register User")
	r.HandleFunc("/reset", userController.reset).Name("Reset User")
	r.HandleFunc("/validate", userController.validateUser).Name("Validate User")
	r.HandleFunc("/login", userController.authorizeLogin).Name("Authorize User")
	r.HandleFunc("/logout", userController.logOut).Name("Logout User")
	r.HandleFunc("/access", userController.access).Name("User Access")
}
