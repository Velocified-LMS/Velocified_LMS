package routes

import (
	"github.com/gorilla/mux"
)

func RegisterMessageRoutes(r *mux.Router) {
	r.HandleFunc("/get", messageController.getMessage).Name("Get Message")
	r.HandleFunc("/send", messageController.sendMessage).Name("Send Message")
}
