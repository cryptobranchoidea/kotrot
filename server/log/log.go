package log

import (
	"os"

	"github.com/labstack/gommon/log"
	"github.com/seipan/loghook"

	"github.com/cryptobranchoidea/kotrot/config"
)

func NewHoook() *loghook.Logger {
	logger := loghook.NewLogger(os.Getenv("LOGIMG"), os.Getenv("LOGNAME"), "discord", os.Getenv("WEBHOOKURL"))
	logger.SetLevel(loghook.InfoLevel)
	if os.Getenv("ENVIRONMENT") == "prd" {
		logger.NoSendInfo()
	}
	logger.SetErrorWebhook(os.Getenv("ERRORWEBHOOKURL"))
	return logger
}

func New() *log.Logger {
	logger := log.New("application")
	logger.SetLevel(log.INFO)
	if config.IsLocal() || config.IsDev() {
		logger.SetLevel(log.DEBUG)
	}
	return logger
}
