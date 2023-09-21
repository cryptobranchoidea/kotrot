package cmd

import (
	"github.com/cryptobranchoidea/kotrot/pkg/web/router"
)

func Exec() {
	r := router.NewRouter()
	r.HealthRouter()
	r.Serve()
}
