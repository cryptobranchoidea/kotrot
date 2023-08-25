package cmd

import (
	"github.com/cryptobranchoidea/fisap/pkg/web/router"
)

func Exec() {
	r := router.NewRouter()
	r.HealthRouter()
	r.Serve()
}
