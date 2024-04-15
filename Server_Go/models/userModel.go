package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username string
	Email    string
	Language string
	Pwd      string

	Company   Company
	CompanyID int

	Path string
	//	Activities Object What is this?
	Coach      []string
	Otp        string
	Validated  bool
	Access     string
	Completion uint
}
