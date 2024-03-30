package models

import (
	"gorm.io/gorm"
)

type Company struct {
	gorm.Model
	name    string
	email   string
	phone   string
	address string
	city    string
	state   string
	domain  string
	seats   uint
}
