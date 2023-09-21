package router

import (
	"github.com/cryptobranchoidea/kotrot/pkg/web/handler/health"
)

func (r *Router) HealthRouter() {
	r.app.Get("/health", health.HealthHandler)
}
