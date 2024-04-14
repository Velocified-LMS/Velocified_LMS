package controllers

import (
	"encoding/json"
	"net/http"
	"velocified/lms-backend/database"
	"velocified/lms-backend/models"
)

type ActivityErr struct {
	Message string `json:"message"`
	Error   string `json:"err"`
}

func GetActivity(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	activityId := r.URL.Query().Get("activity")

	if activityId == "" {
		w.WriteHeader(500)
		json.NewEncoder(w).Encode(&ActivityErr{Message: "Error fetching Activity", Error: "Invalid Query"})
	}

	var activity models.Activity

	database.Instance.First(&activity, activityId)

	if activity.ID == 0 {
		w.WriteHeader(500)
		json.NewEncoder(w).Encode(&ActivityErr{Message: "Error fetching Activity", Error: "Activity Not Found"})
	} else {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(activity)
	}
}
