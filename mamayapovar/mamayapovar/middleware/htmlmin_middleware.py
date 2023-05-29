from django_minify_html.middleware import MinifyHtmlMiddleware

class MinifyHtmlMiddleware(MinifyHtmlMiddleware):
    minify_args = MinifyHtmlMiddleware.minify_args | {
        "minify_css": False,
    }
