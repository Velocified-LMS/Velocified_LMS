package database

import (
	"log"
	"velocified/lms-backend/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var Instance *gorm.DB
var err error

func Connect(connectionString string) {
	Instance, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		panic("Cannot connect to DB")
	}
	log.Println("Connected to Database...")
}
func Migrate() {
	Instance.AutoMigrate(&models.Activity{},
		&models.Company{},
		&models.Message{},
		&models.Path{},
		&models.User{})
	log.Println("Database Migration Completed...")
}
