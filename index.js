"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ pages_getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(7673);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(9653);
;// CONCATENATED MODULE: ./components/PostCard.js





// The page for each post
function PostCard({ frontmatter , content  }) {
    const { title , author , annotation , category , date , bannerImage , tags  } = frontmatter;
    const featImg = bannerImage;
    const nextImages = bannerImage;
    const featureImages = bannerImage;
    const url = "localhost:3000";
    return(/*#__PURE__*/ _jsxs("article", {
        className: "post-card",
        children: [
            featImg && /*#__PURE__*/ _jsx(Link, {
                href: url,
                children: /*#__PURE__*/ _jsx("a", {
                    className: "post-card-image-link",
                    "aria-label": title,
                    children: nextImages ? /*#__PURE__*/ _jsx("div", {
                        className: "post-card-image",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: url,
                            alt: title,
                            sizes: "(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px",
                            layout: "fill",
                            objectFit: "cover",
                            quality: "1"
                        })
                    }) : feature_image && /*#__PURE__*/ _jsx("img", {
                        className: "post-card-image",
                        src: feature_image,
                        alt: title
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "post-card-content",
                children: /*#__PURE__*/ _jsx(Link, {
                    href: url,
                    children: /*#__PURE__*/ _jsxs("a", {
                        className: "post-card-content-link",
                        children: [
                            /*#__PURE__*/ _jsxs("header", {
                                className: "post-card-header",
                                children: [
                                    tags && /*#__PURE__*/ _jsx("div", {
                                        className: "post-card-primary-tag",
                                        children: tags
                                    }),
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "post-card-title",
                                        children: title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("section", {
                                className: "post-card-excerpt",
                                children: /*#__PURE__*/ _jsx("p", {
                                    children: content
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
// Generating the paths for each post
async function getStaticPaths() {
    // Get list of all files from our posts directory
    const files = fs.readdirSync("posts");
    // Generate a path for each one
    const paths = files.map((fileName)=>({
            params: {
                slug: fileName.replace(".md", "")
            }
        })
    );
    // return list of paths
    return {
        paths,
        fallback: false
    };
}
// Generate the static props for the page
async function getStaticProps({ params: { slug  }  }) {
    //    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const fileName = fs.readFileSync(`posts/mypost.md`, 'utf-8');
    const { data: frontmatter , content  } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    };
}

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: ./public/favicon.ico
var favicon = __webpack_require__(5716);
;// CONCATENATED MODULE: ./pages/index.js









function Home({ posts  }) {
    const bannerImages = {
        dimensions: {
            width: 200,
            height: 121
        },
        url: favicon/* default */.Z
    };
    const featImg = bannerImages;
    const nextImages = bannerImages;
    const feature_image = bannerImages;
    const url = favicon/* default */.Z;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Блог Тёмного эколога"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                id: "site-main",
                className: "site-main outer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inner posts",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "post-feed",
                        children: posts.map((post)=>{
                            //extract slug and frontmatter
                            const { slug , frontmatter  } = post;
                            //extract frontmatter properties
                            const { title , annotation , category , date , bannerImage , tags  } = frontmatter;
                            return(// eslint-disable-next-line react/jsx-key
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                className: "post-card post tag-getting-started",
                                children: [
                                    featImg && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "posts/" + slug,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "post-card-image-link",
                                            "aria-label": title,
                                            children: nextImages ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "post-card-image",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: "http://localhost:3000/" + bannerImage,
                                                    alt: title,
                                                    sizes: "(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px",
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    quality: "90"
                                                })
                                            }) : feature_image && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "post-card-image",
                                                src: feature_image,
                                                alt: title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "post-card-content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "posts/" + slug,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "post-card-content-link",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                                        className: "post-card-header",
                                                        children: [
                                                            tags && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "post-card-primary-tag",
                                                                children: tags
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "post-card-title",
                                                                children: title
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                                        className: "post-card-excerpt",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: annotation
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }));
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: ""
            })
        ]
    }));
};
//Generating the Static Props for the Blog Page
async function pages_getStaticProps() {
    // get list of files from the posts folder
    const readfiles = external_fs_default().readdirSync('posts');
    const files = readfiles.reverse();
    // get frontmatter & slug from each post
    const posts = files.map((fileName)=>{
        const slug = fileName.replace('.md', '');
        const readFile = external_fs_default().readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter  } = external_gray_matter_default()(readFile);
        return {
            slug,
            frontmatter
        };
    });
    // Return the pages static props
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 9653:
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,673], () => (__webpack_exec__(4836)));
module.exports = __webpack_exports__;

})();