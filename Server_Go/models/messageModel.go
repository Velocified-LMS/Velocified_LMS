package models

import (
	"time"

	"gorm.io/gorm"
)

type Message struct {
	gorm.Model
	Conent string

	Sender   User
	SenderID uint

	Date time.Time
	Path string
}
