(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function SmoothScroll(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "d39c7786026781bc1bcb74d48e41bce8991ff011a2d0023f283222c20c101616") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d39c7786026781bc1bcb74d48e41bce8991ff011a2d0023f283222c20c101616";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_SmoothScrollUseEffect, t1);
    let t2;
    if ($[2] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[2] = children;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
function _SmoothScrollUseEffect() {
    const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        duration: 1.2,
        easing: _temp,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add({
        "SmoothScroll[useEffect() > gsap.ticker.add()]": (time_0)=>{
            lenis.raf(time_0 * 1000);
        }
    }["SmoothScroll[useEffect() > gsap.ticker.add()]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
    return ()=>{
        lenis.destroy();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach(_SmoothScrollUseEffectAnonymousAnonymous);
    };
}
function _SmoothScrollUseEffectAnonymousAnonymous(trigger) {
    return trigger.kill();
}
function _temp(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
}
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "cf46d934b1737726d6ed3d8029a33d8428aabab0ba5536950178d1a67df7489b") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf46d934b1737726d6ed3d8029a33d8428aabab0ba5536950178d1a67df7489b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CustomCursor[useEffect()]": ()=>{
                const checkDesktop = _CustomCursorUseEffectCheckDesktop;
                const setupCursor = {
                    "CustomCursor[useEffect() > setupCursor]": ()=>{
                        if (cleanupRef.current) {
                            cleanupRef.current();
                            cleanupRef.current = null;
                        }
                        if (!checkDesktop()) {
                            setIsDesktop(false);
                            return;
                        }
                        setIsDesktop(true);
                        let currentX = window.innerWidth / 2;
                        let currentY = window.innerHeight / 2;
                        let targetX = window.innerWidth / 2;
                        let targetY = window.innerHeight / 2;
                        setPosition({
                            x: currentX,
                            y: currentY
                        });
                        const updateCursor = {
                            "CustomCursor[useEffect() > setupCursor > updateCursor]": (e)=>{
                                targetX = e.clientX;
                                targetY = e.clientY;
                            }
                        }["CustomCursor[useEffect() > setupCursor > updateCursor]"];
                        const animate = {
                            "CustomCursor[useEffect() > setupCursor > animate]": ()=>{
                                currentX = currentX + (targetX - currentX) * 0.15;
                                currentX;
                                currentY = currentY + (targetY - currentY) * 0.15;
                                currentY;
                                setPosition({
                                    x: currentX,
                                    y: currentY
                                });
                                rafRef.current = requestAnimationFrame(animate);
                            }
                        }["CustomCursor[useEffect() > setupCursor > animate]"];
                        const handleMouseOver = {
                            "CustomCursor[useEffect() > setupCursor > handleMouseOver]": (e_0)=>{
                                const target = e_0.target;
                                const linkElement = target.closest("[data-cursor-text]");
                                if (linkElement) {
                                    const cursorText = linkElement.getAttribute("data-cursor-text");
                                    if (cursorText) {
                                        setText(cursorText);
                                        setIsVisible(true);
                                    }
                                }
                            }
                        }["CustomCursor[useEffect() > setupCursor > handleMouseOver]"];
                        const handleMouseOut = {
                            "CustomCursor[useEffect() > setupCursor > handleMouseOut]": (e_1)=>{
                                const target_0 = e_1.target;
                                const linkElement_0 = target_0.closest("[data-cursor-text]");
                                if (linkElement_0 && !linkElement_0.contains(e_1.relatedTarget)) {
                                    setText("");
                                    setIsVisible(false);
                                }
                            }
                        }["CustomCursor[useEffect() > setupCursor > handleMouseOut]"];
                        window.addEventListener("mousemove", updateCursor);
                        document.addEventListener("mouseover", handleMouseOver, true);
                        document.addEventListener("mouseout", handleMouseOut, true);
                        rafRef.current = requestAnimationFrame(animate);
                        cleanupRef.current = ()=>{
                            window.removeEventListener("mousemove", updateCursor);
                            document.removeEventListener("mouseover", handleMouseOver, true);
                            document.removeEventListener("mouseout", handleMouseOut, true);
                            if (rafRef.current) {
                                cancelAnimationFrame(rafRef.current);
                                rafRef.current = null;
                            }
                        };
                    }
                }["CustomCursor[useEffect() > setupCursor]"];
                setupCursor();
                const handleResize = {
                    "CustomCursor[useEffect() > handleResize]": ()=>{
                        setupCursor();
                    }
                }["CustomCursor[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                return ()=>{
                    window.removeEventListener("resize", handleResize);
                    if (cleanupRef.current) {
                        cleanupRef.current();
                    }
                };
            }
        })["CustomCursor[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isDesktop) {
        return null;
    }
    const t3 = `${position.x}px`;
    const t4 = `${position.y}px`;
    const t5 = isVisible ? 1 : 0;
    let t6;
    if ($[4] !== t3 || $[5] !== t4 || $[6] !== t5) {
        t6 = {
            left: t3,
            top: t4,
            transform: "translate(-50%, -50%)",
            opacity: t5,
            pointerEvents: "none"
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== text) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-black text-xs font-medium whitespace-nowrap bg-white px-3 py-1.5 rounded-full shadow-md",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[8] = text;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t6 || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed pointer-events-none z-[9999] transition-opacity duration-200",
            style: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const t9 = `${position.x}px`;
    const t10 = `${position.y}px`;
    const t11 = isVisible ? 0 : 1;
    let t12;
    if ($[13] !== t10 || $[14] !== t11 || $[15] !== t9) {
        t12 = {
            left: t9,
            top: t10,
            transform: "translate(-50%, -50%)",
            opacity: t11
        };
        $[13] = t10;
        $[14] = t11;
        $[15] = t9;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black rounded-full w-5 h-5 border border-white"
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed pointer-events-none z-[9998] transition-opacity duration-200",
            style: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/CustomCursor.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t14 || $[21] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t14
            ]
        }, void 0, true);
        $[20] = t14;
        $[21] = t8;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    return t15;
}
_s(CustomCursor, "4daSo0qxtuJND1AqDSV9VJxZEaU=");
_c = CustomCursor;
function _CustomCursorUseEffectCheckDesktop() {
    const hasPointerDevice = window.matchMedia("(pointer: fine)").matches;
    const isDesktopWidth = window.innerWidth >= 1280;
    return hasPointerDevice && isDesktopWidth;
}
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_982a1ab2._.js.map