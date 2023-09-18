package config

import "os"

func IsLocal() bool {
	return os.Getenv("ENVIRONMENT") == "local"
}

func IsDev() bool {
	return os.Getenv("ENVIRONMENT") == "dev"
}

func IsPrd() bool {
	return os.Getenv("ENVIRONMENT") == "prd"
}
