package routes

import (
	"github.com/gorilla/mux"
)

func RegisterActivityRoutes(r *mux.Router) {
	r.HandleFunc("/", activityController.getActivity).Name("Get Activity")
	r.HandleFunc("/path", activityController.getActivitiesByPath).Name("Get Activities By Path")
	r.HandleFunc("/create", activityController.createActivity).Name("Create Activitiy")
	r.HandleFunc("/update", activityController.updateActivity).Name("Update Activitiy")
}
