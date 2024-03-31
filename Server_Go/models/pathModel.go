package models

import (
	"gorm.io/gorm"
)

type Path struct {
	gorm.Model
	PathName              string
	ProficiencyDefinition string
	Activities            []Activity

	Company   Company
	CompanyID int

	Completed int
	Total     int
	Seats     int
}
