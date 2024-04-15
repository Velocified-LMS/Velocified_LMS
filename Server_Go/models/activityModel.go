package models

import (
	"time"

	"gorm.io/gorm"
)

type Activity struct {
	gorm.Model
	ActivityName        string
	ActivityDescription string
	Date                time.Time
	Day                 uint
	Star                bool
	Completed           bool
	PathID              uint
	Path                Path
	Update              string
}
