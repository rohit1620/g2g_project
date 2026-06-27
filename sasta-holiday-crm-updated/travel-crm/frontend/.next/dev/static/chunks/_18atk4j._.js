(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const styles = {
    "Not Assigned": {
        bg: "#EAEDF3",
        text: "#4B5670",
        dot: "#8A93A6"
    },
    Assigned: {
        bg: "#E3EFFC",
        text: "#0F3D6E",
        dot: "#2E7BD6"
    },
    "In Process": {
        bg: "#FBEEDA",
        text: "#7A4E0E",
        dot: "#E69A1F"
    },
    "Follow-up": {
        bg: "#ECE9FB",
        text: "#3D348E",
        dot: "#7C6FE0"
    },
    Confirmed: {
        bg: "#E0F4EC",
        text: "#0E5A3F",
        dot: "#1A9E72"
    },
    Cancelled: {
        bg: "#ECEEF2",
        text: "#4B5670",
        dot: "#8A93A6"
    },
    Lost: {
        bg: "#FBEAE9",
        text: "#9B3A37",
        dot: "#D9534F"
    }
};
function StatusBadge({ status }) {
    const s = styles[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        style: {
            backgroundColor: s.bg,
            color: s.text
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-1.5 w-1.5 rounded-full",
                style: {
                    backgroundColor: s.dot
                }
            }, void 0, false, {
                fileName: "[project]/components/StatusBadge.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/components/StatusBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/options.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "leadSourceOptions",
    ()=>leadSourceOptions,
    "mealTypeOptions",
    ()=>mealTypeOptions,
    "paymentMethodOptions",
    ()=>paymentMethodOptions,
    "regardingOptions",
    ()=>regardingOptions,
    "statusOptions",
    ()=>statusOptions,
    "tourTypeOptions",
    ()=>tourTypeOptions
]);
const leadSourceOptions = [
    "Instagram",
    "Facebook",
    "Google Ads",
    "Website",
    "Direct",
    "Other"
];
const regardingOptions = [
    "Package",
    "Flight",
    "Other"
];
const statusOptions = [
    "Not Assigned",
    "Assigned",
    "In Process",
    "Follow-up",
    "Confirmed",
    "Cancelled",
    "Lost"
];
const paymentMethodOptions = [
    "Cash",
    "UPI",
    "Bank Transfer",
    "Card",
    "Other"
];
const tourTypeOptions = [
    {
        value: "PRIVATE",
        label: "PRIVATE"
    },
    {
        value: "SIC",
        label: "SIC"
    },
    {
        value: "TICKET_ONLY",
        label: "TICKET ONLY"
    }
];
const mealTypeOptions = [
    "CP",
    "MAP",
    "AP",
    "EP"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/leads/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.mjs [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.mjs [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.mjs [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRightCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeftCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareQuote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-quote.mjs [app-client] (ecmascript) <export default as MessageSquareQuote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/options.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function formatDate(d) {
    if (!d) return "Not set";
    return new Date(d).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}
function formatDateTime(d) {
    return new Date(d).toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}
function formatINR(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
}
const PHASE_STEPS = [
    {
        number: 1,
        label: "Phase 1",
        sublabel: "Lead Generation"
    },
    {
        number: 2,
        label: "Phase 2",
        sublabel: "Vendor & Itinerary"
    },
    {
        number: 3,
        label: "Phase 3",
        sublabel: "Payment & Review"
    }
];
function LeadDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const leadId = params.id;
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vendors, setVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [itineraries, setItineraries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [installments, setInstallments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [noteText, setNoteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [noteAuthor, setNoteAuthor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Single edit mode — covers status, assignment, and trip details together
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editStatus, setEditStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editAssignedTo, setEditAssignedTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editDestination, setEditDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editTravelDate, setEditTravelDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editHotelPreference, setEditHotelPreference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editRegarding, setEditRegarding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Package");
    const [editRegardingOther, setEditRegardingOther] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editVendorId, setEditVendorId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editVendorOther, setEditVendorOther] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editLeadSource, setEditLeadSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editLeadSourceOther, setEditLeadSourceOther] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editMarginAmount, setEditMarginAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editCloseStatus, setEditCloseStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Not Closed");
    const [saveNote, setSaveNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saveActor, setSaveActor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaymentForm, setShowPaymentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPhaseForm, setShowPhaseForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phaseActor, setPhaseActor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phaseNote, setPhaseNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Client review now has its own standalone edit form, independent of the
    // page-wide Edit mode, so it's never blocked by unrelated required fields.
    const [showReviewForm, setShowReviewForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reviewFormRating, setReviewFormRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reviewFormComment, setReviewFormComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [reviewFormActor, setReviewFormActor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [savingReview, setSavingReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadLead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LeadDetailPage.useCallback[loadLead]": async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/leads/${leadId}`);
                setLead(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load lead.");
            }
        }
    }["LeadDetailPage.useCallback[loadLead]"], [
        leadId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadDetailPage.useEffect": ()=>{
            setLoading(true);
            Promise.all([
                loadLead(),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/employees").then(setEmployees),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/vendors").then(setVendors),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/leads/${leadId}/itineraries`).then(setItineraries),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/leads/${leadId}/booking/installments`).then(setInstallments).catch({
                    "LeadDetailPage.useEffect": ()=>setInstallments([])
                }["LeadDetailPage.useEffect"])
            ]).catch({
                "LeadDetailPage.useEffect": (err)=>setError(err instanceof Error ? err.message : "Failed to load page.")
            }["LeadDetailPage.useEffect"]).finally({
                "LeadDetailPage.useEffect": ()=>setLoading(false)
            }["LeadDetailPage.useEffect"]);
        }
    }["LeadDetailPage.useEffect"], [
        loadLead,
        leadId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-8 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--muted)"
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/leads/[id]/page.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this);
    }
    if (error || !lead) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--muted)"
                    },
                    children: error || "Lead not found."
                }, void 0, false, {
                    fileName: "[project]/app/leads/[id]/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/leads"),
                    className: "mt-2 text-[13px]",
                    style: {
                        color: "var(--accent)"
                    },
                    children: "Back to leads"
                }, void 0, false, {
                    fileName: "[project]/app/leads/[id]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/leads/[id]/page.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this);
    }
    const isPhase1 = lead.current_phase === 1;
    const canMoveForward = lead.current_phase < 3;
    const canMoveBack = lead.current_phase > 1;
    const activity = [
        {
            id: "created",
            type: "created",
            text: "Lead created",
            by: lead.created_by,
            at: lead.created_at
        },
        ...lead.statusHistory.filter((h)=>h.old_status !== null).map((h)=>({
                id: h.id,
                type: "status",
                text: `Status changed from ${h.old_status} to ${h.new_status} — "${h.note}"`,
                by: h.changed_by,
                at: h.changed_at
            })),
        ...lead.assignmentHistory.map((a)=>({
                id: a.id,
                type: "assignment",
                text: (a.old_assigned_to_name ? `Reassigned from ${a.old_assigned_to_name} to ${a.new_assigned_to_name}` : `Assigned to ${a.new_assigned_to_name}`) + ` — "${a.note}"`,
                by: a.changed_by,
                at: a.changed_at
            })),
        ...lead.tripDetailHistory.map((t)=>({
                id: t.id,
                type: "trip",
                text: `Trip details edited — "${t.note}"`,
                by: t.changed_by,
                at: t.changed_at
            })),
        ...lead.phaseHistory.map((p)=>({
                id: p.id,
                type: "phase",
                text: `Moved from Phase ${p.old_phase} to Phase ${p.new_phase} — "${p.note}"`,
                by: p.changed_by,
                at: p.changed_at
            })),
        ...lead.phase3History.map((p)=>({
                id: p.id,
                type: "phase3",
                text: `Margin/review/closing updated — "${p.note}"`,
                by: p.changed_by,
                at: p.changed_at
            })),
        ...lead.notes.map((n)=>({
                id: n.id,
                type: "note",
                text: n.note_text,
                by: n.added_by,
                at: n.added_at
            }))
    ].sort((a, b)=>new Date(b.at).getTime() - new Date(a.at).getTime());
    function startEditing() {
        setEditStatus(lead.status);
        setEditAssignedTo(lead.assigned_to ?? "");
        setEditDestination(lead.destination ?? "");
        setEditTravelDate(lead.travel_date ?? "");
        setEditHotelPreference(lead.hotel_preference ?? "");
        setEditRegarding(lead.regarding ?? "Package");
        setEditRegardingOther(lead.regarding_other ?? "");
        setEditVendorId(lead.vendor_id ?? "");
        setEditVendorOther(lead.vendor_other ?? "");
        setEditLeadSource(lead.lead_source ?? "");
        setEditLeadSourceOther(lead.lead_source_other ?? "");
        setEditMarginAmount(lead.margin_amount ?? "");
        setEditCloseStatus(lead.close_status ?? "Not Closed");
        setSaveNote("");
        setSaveActor("");
        setIsEditing(true);
    }
    function cancelEditing() {
        setIsEditing(false);
    }
    async function handleSaveChanges() {
        if (!saveActor) {
            alert("Select your name before saving.");
            return;
        }
        if (!saveNote.trim()) {
            alert("Add a note explaining what changed before saving.");
            return;
        }
        const statusChanged = editStatus && editStatus !== lead.status;
        const assignmentChanged = editAssignedTo && editAssignedTo !== (lead.assigned_to ?? "");
        const tripChanged = isPhase1 && (editDestination !== (lead.destination ?? "") || editTravelDate !== (lead.travel_date ?? "") || editHotelPreference !== (lead.hotel_preference ?? "") || editRegarding !== (lead.regarding ?? "Package") || editRegardingOther !== (lead.regarding_other ?? "") || editVendorId !== (lead.vendor_id ?? "") || editVendorOther !== (lead.vendor_other ?? "") || editLeadSource !== (lead.lead_source ?? "") || editLeadSourceOther !== (lead.lead_source_other ?? ""));
        const phase3Changed = lead.current_phase === 3 && (editMarginAmount !== (lead.margin_amount ?? "") || editCloseStatus !== (lead.close_status ?? "Not Closed"));
        if (!statusChanged && !assignmentChanged && !tripChanged && !phase3Changed) {
            alert("No changes were made.");
            return;
        }
        setSaving(true);
        try {
            if (statusChanged) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/leads/${leadId}/status`, {
                    new_status: editStatus,
                    note: saveNote,
                    changed_by: saveActor
                });
            }
            if (assignmentChanged) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/leads/${leadId}/assign`, {
                    new_assigned_to: editAssignedTo,
                    note: saveNote,
                    changed_by: saveActor
                });
            }
            if (tripChanged) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/leads/${leadId}/trip-details`, {
                    destination: editDestination || null,
                    travel_date: editTravelDate || null,
                    hotel_preference: editRegarding === "Flight" ? null : editHotelPreference || null,
                    regarding: editRegarding || "Package",
                    regarding_other: editRegarding === "Other" ? editRegardingOther : null,
                    vendor_id: editVendorId && editVendorId !== "other" ? editVendorId : null,
                    vendor_other: editVendorId === "other" ? editVendorOther : null,
                    lead_source: editLeadSource || null,
                    lead_source_other: editLeadSource === "Other" ? editLeadSourceOther : null,
                    note: saveNote,
                    changed_by: saveActor
                });
            }
            if (phase3Changed) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/leads/${leadId}/phase3-details`, {
                    margin_amount: editMarginAmount || null,
                    review_rating: lead.review_rating ?? null,
                    review_comment: lead.review_comment ?? null,
                    close_status: editCloseStatus,
                    note: saveNote,
                    changed_by: saveActor
                });
            }
            setIsEditing(false);
            await loadLead();
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to save changes.");
        } finally{
            setSaving(false);
        }
    }
    async function handleAddNote(e) {
        e.preventDefault();
        if (!noteText.trim() || !noteAuthor) {
            alert("Add a note and select your name before saving.");
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/leads/${leadId}/notes`, {
                note_text: noteText,
                added_by: noteAuthor
            });
            setNoteText("");
            await loadLead();
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to save note.");
        }
    }
    async function handlePhaseMove(newPhase) {
        if (!phaseActor || !phaseNote.trim()) {
            alert("Select your name and write a note before moving phases.");
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/leads/${leadId}/phase`, {
                new_phase: newPhase,
                note: phaseNote,
                changed_by: phaseActor
            });
            setShowPhaseForm(false);
            setPhaseActor("");
            setPhaseNote("");
            await loadLead();
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to move phase.");
        }
    }
    async function handleDeleteItinerary(itineraryId) {
        if (!confirm("Delete this itinerary draft? This can't be undone.")) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/leads/${leadId}/itineraries/${itineraryId}`);
            setItineraries((prev)=>prev.filter((i)=>i.id !== itineraryId));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete itinerary.");
        }
    }
    async function handleAddInstallment(amount, paidOn, method, recordedBy) {
        if (!amount || !recordedBy) {
            alert("Enter an amount and select your name before saving.");
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/leads/${leadId}/booking/installments`, {
                amount: Number(amount),
                paid_on: paidOn || undefined,
                payment_method: method || null,
                recorded_by: recordedBy
            });
            setShowPaymentForm(false);
            await loadLead();
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/leads/${leadId}/booking/installments`);
            setInstallments(updated);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to record payment.");
        }
    }
    function startReviewEditing() {
        setReviewFormRating(lead.review_rating ?? 0);
        setReviewFormComment(lead.review_comment ?? "");
        setReviewFormActor("");
        setShowReviewForm(true);
    }
    async function handleSaveReview() {
        if (!reviewFormActor) {
            alert("Select your name before saving.");
            return;
        }
        if (!reviewFormRating && !reviewFormComment.trim()) {
            alert("Add a rating or a comment before saving.");
            return;
        }
        setSavingReview(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/leads/${leadId}/phase3-details`, {
                margin_amount: lead.margin_amount ?? null,
                review_rating: reviewFormRating || null,
                review_comment: reviewFormComment.trim() || null,
                close_status: lead.close_status ?? "Not Closed",
                note: "Client review updated",
                changed_by: reviewFormActor
            });
            setShowReviewForm(false);
            await loadLead();
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to save client review.");
        } finally{
            setSavingReview(false);
        }
    }
    async function handleDownloadInvoice() {
        try {
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/leads/${leadId}/booking/invoice`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            });
            if (!res.ok) throw new Error("Failed to download invoice.");
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${lead?.booking?.invoice_number || "invoice"}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to download invoice.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-8 py-8 max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push("/leads"),
                className: "flex items-center gap-1.5 text-[13px] mb-6",
                style: {
                    color: "var(--muted)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    "Back to leads"
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[22px] font-medium",
                                        children: lead.customer_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        status: lead.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] mt-1",
                                style: {
                                    color: "var(--muted)"
                                },
                                children: [
                                    lead.lead_number,
                                    " · Created by ",
                                    lead.created_by,
                                    " on ",
                                    formatDate(lead.created_at)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startEditing,
                        className: "flex items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] font-medium text-white",
                        style: {
                            backgroundColor: "var(--accent)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            "Edit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border p-5 mb-6",
                style: {
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center max-w-md mx-auto mb-4",
                        children: PHASE_STEPS.map((step, i)=>{
                            const isDone = step.number < lead.current_phase;
                            const isCurrent = step.number === lead.current_phase;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center flex-1 last:flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-medium shrink-0",
                                                style: {
                                                    backgroundColor: isDone ? "#E0F4EC" : isCurrent ? "var(--primary)" : "var(--background)",
                                                    color: isDone ? "#0E5A3F" : isCurrent ? "#fff" : "var(--muted)",
                                                    border: !isDone && !isCurrent ? "1px solid var(--border)" : "none"
                                                },
                                                children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 31
                                                }, this) : step.number
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] font-medium mt-2 text-center whitespace-nowrap",
                                                style: {
                                                    color: isCurrent || isDone ? "var(--foreground)" : "var(--muted)"
                                                },
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-center",
                                                style: {
                                                    color: "var(--muted)"
                                                },
                                                children: step.sublabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this),
                                    i < PHASE_STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-[2px] mb-7 mx-1",
                                        style: {
                                            backgroundColor: isDone ? "#9FE1CB" : "var(--border)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, step.number, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    !showPhaseForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [
                            canMoveBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPhaseForm(true),
                                className: "flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium border",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--foreground)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftCircle$3e$__["ArrowLeftCircle"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 537,
                                        columnNumber: 17
                                    }, this),
                                    "Back to Phase ",
                                    lead.current_phase - 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 532,
                                columnNumber: 15
                            }, this),
                            canMoveForward && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPhaseForm(true),
                                className: "flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium border",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--foreground)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightCircle$3e$__["ArrowRightCircle"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 17
                                    }, this),
                                    "Move to Phase ",
                                    lead.current_phase + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 542,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 530,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            showPhaseForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border p-4 mb-6",
                style: {
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-medium mb-3",
                        children: "Where do you want to move this lead?"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 559,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: phaseNote,
                        onChange: (e)=>setPhaseNote(e.target.value),
                        rows: 2,
                        placeholder: "Note explaining this move (required)",
                        className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none mb-2",
                        style: {
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: phaseActor,
                                onChange: (e)=>setPhaseActor(e.target.value),
                                className: "flex-1 rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                style: {
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Your name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this),
                                    employees.filter((e)=>e.is_active).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: e.name,
                                            children: e.name
                                        }, e.id, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this),
                            canMoveBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePhaseMove(lead.current_phase - 1),
                                className: "rounded-lg px-4 py-2 text-[13px] font-medium border shrink-0",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--foreground)"
                                },
                                children: [
                                    "← Phase ",
                                    lead.current_phase - 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 583,
                                columnNumber: 15
                            }, this),
                            canMoveForward && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePhaseMove(lead.current_phase + 1),
                                className: "rounded-lg px-4 py-2 text-[13px] font-medium text-white shrink-0",
                                style: {
                                    backgroundColor: "var(--accent)"
                                },
                                children: [
                                    "Phase ",
                                    lead.current_phase + 1,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 592,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPhaseForm(false),
                                className: "rounded-lg px-4 py-2 text-[13px] font-medium border shrink-0",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--foreground)"
                                },
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 555,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Contact",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 28
                                        }, this),
                                        label: "Phone",
                                        value: lead.phone
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 28
                                        }, this),
                                        label: "Email",
                                        value: lead.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Status & assignment",
                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editStatus,
                                                    onChange: (e)=>setEditStatus(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    },
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOptions"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: s,
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Assigned to"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editAssignedTo,
                                                    onChange: (e)=>setEditAssignedTo(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Not assigned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 21
                                                        }, this),
                                                        employees.filter((e)=>e.is_active).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: e.id,
                                                                children: e.name
                                                            }, e.id, false, {
                                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 659,
                                                columnNumber: 32
                                            }, this),
                                            label: "Status",
                                            value: lead.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 25
                                            }, this),
                                            label: "Assigned to",
                                            value: lead.assigned_to_name ?? "Unassigned"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Trip details",
                                action: !isEditing && !isPhase1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 text-[12px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    title: "Move this lead back to Phase 1 to edit trip details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this),
                                        "Locked in Phase ",
                                        lead.current_phase
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 17
                                }, this),
                                children: isEditing ? isPhase1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[12px] mb-1",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: "Destination"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: editDestination,
                                                            onChange: (e)=>setEditDestination(e.target.value),
                                                            className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                            style: {
                                                                backgroundColor: "var(--background)",
                                                                borderColor: "var(--border)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[12px] mb-1",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: "Travel date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: editTravelDate,
                                                            onChange: (e)=>setEditTravelDate(e.target.value),
                                                            className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                            style: {
                                                                backgroundColor: "var(--background)",
                                                                borderColor: "var(--border)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 688,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[12px] mb-1",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: "Lead source"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: editLeadSource,
                                                            onChange: (e)=>setEditLeadSource(e.target.value),
                                                            className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                            style: {
                                                                backgroundColor: "var(--background)",
                                                                borderColor: "var(--border)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Not specified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 725,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Instagram",
                                                                    children: "Instagram"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Facebook",
                                                                    children: "Facebook"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Google Ads",
                                                                    children: "Google Ads"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 728,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Website",
                                                                    children: "Website"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Direct",
                                                                    children: "Direct"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Other",
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 731,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 719,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[12px] mb-1",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: "Regarding"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: editRegarding,
                                                            onChange: (e)=>setEditRegarding(e.target.value),
                                                            className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                            style: {
                                                                backgroundColor: "var(--background)",
                                                                borderColor: "var(--border)"
                                                            },
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regardingOptions"].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: r,
                                                                    children: r
                                                                }, r, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 714,
                                            columnNumber: 19
                                        }, this),
                                        editLeadSource === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Specify source"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: editLeadSourceOther,
                                                    onChange: (e)=>setEditLeadSourceOther(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 754,
                                            columnNumber: 21
                                        }, this),
                                        editRegarding === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Specify regarding"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: editRegardingOther,
                                                    onChange: (e)=>setEditRegardingOther(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 768,
                                            columnNumber: 21
                                        }, this),
                                        editRegarding !== "Flight" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Hotel preference"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: editHotelPreference,
                                                    onChange: (e)=>setEditHotelPreference(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 782,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Vendor"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editVendorId,
                                                    onChange: (e)=>setEditVendorId(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Not specified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 23
                                                        }, this),
                                                        vendors.filter((v)=>v.is_active).map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: v.id,
                                                                children: v.name
                                                            }, v.id, false, {
                                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 25
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "other",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 795,
                                            columnNumber: 19
                                        }, this),
                                        editVendorId === "other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Specify vendor"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: editVendorOther,
                                                    onChange: (e)=>setEditVendorOther(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 816,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 687,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-1.5 text-[13px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 834,
                                            columnNumber: 19
                                        }, this),
                                        "Trip details are locked while this lead is in Phase ",
                                        lead.current_phase,
                                        ". Move it back to Phase 1 to edit them."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 841,
                                                columnNumber: 32
                                            }, this),
                                            label: "Destination",
                                            value: lead.destination ?? "Not set"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 841,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 842,
                                                columnNumber: 32
                                            }, this),
                                            label: "Travel date",
                                            value: formatDate(lead.travel_date)
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 842,
                                            columnNumber: 17
                                        }, this),
                                        lead.regarding !== "Flight" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 844,
                                                columnNumber: 34
                                            }, this),
                                            label: "Hotel preference",
                                            value: lead.hotel_preference ?? "Not set"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 844,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 847,
                                                columnNumber: 25
                                            }, this),
                                            label: "Regarding",
                                            value: lead.regarding ? lead.regarding === "Other" ? lead.regarding_other ?? "Other" : lead.regarding : "Not set"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 858,
                                                columnNumber: 25
                                            }, this),
                                            label: "Vendor",
                                            value: lead.vendor_name ?? lead.vendor_other ?? "Not set"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 857,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 863,
                                                columnNumber: 25
                                            }, this),
                                            label: "Lead source",
                                            value: lead.lead_source ? lead.lead_source === "Other" ? lead.lead_source_other ?? "Other" : lead.lead_source : "Not set"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 862,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Margin & closing",
                                children: lead.current_phase < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-1.5 text-[13px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 17
                                        }, this),
                                        "Move this lead to Phase 3 to record margin and closing status."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this) : isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Margin amount (₹)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: editMarginAmount,
                                                    onChange: (e)=>setEditMarginAmount(e.target.value),
                                                    placeholder: "e.g. 8000",
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 891,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 887,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Close status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editCloseStatus,
                                                    onChange: (e)=>setEditCloseStatus(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Not Closed",
                                                            children: "Not Closed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 911,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Closed - Won",
                                                            children: "Closed - Won"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 912,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Closed - Lost",
                                                            children: "Closed - Lost"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 913,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 886,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 920,
                                                columnNumber: 25
                                            }, this),
                                            label: "Margin",
                                            value: lead.margin_amount ? formatINR(lead.margin_amount) : "Not set"
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 924,
                                                columnNumber: 32
                                            }, this),
                                            label: "Close status",
                                            value: lead.close_status
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 924,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 876,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Client review",
                                action: lead.current_phase >= 3 && !showReviewForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startReviewEditing,
                                    className: "text-[12px] font-medium",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: lead.review_rating || lead.review_comment ? "Edit" : "Add review"
                                }, void 0, false, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 934,
                                    columnNumber: 17
                                }, this),
                                children: lead.current_phase < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-1.5 text-[13px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 17
                                        }, this),
                                        "Move this lead to Phase 3 to record the client's review."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 945,
                                    columnNumber: 15
                                }, this) : showReviewForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Rating"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        [
                                                            1,
                                                            2,
                                                            3,
                                                            4,
                                                            5
                                                        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setReviewFormRating(star),
                                                                className: "text-[22px] leading-none",
                                                                style: {
                                                                    color: star <= reviewFormRating ? "#E69A1F" : "var(--border)"
                                                                },
                                                                children: "★"
                                                            }, star, false, {
                                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                                lineNumber: 960,
                                                                columnNumber: 23
                                                            }, this)),
                                                        reviewFormRating > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setReviewFormRating(0),
                                                            className: "text-[12px] ml-2",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 954,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Review comment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 984,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: reviewFormComment,
                                                    onChange: (e)=>setReviewFormComment(e.target.value),
                                                    rows: 3,
                                                    placeholder: "What did the client say?",
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 983,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[12px] mb-1",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 998,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: reviewFormActor,
                                                    onChange: (e)=>setReviewFormActor(e.target.value),
                                                    className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select your name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 21
                                                        }, this),
                                                        employees.filter((e)=>e.is_active).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: e.name,
                                                                children: e.name
                                                            }, e.id, false, {
                                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 997,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSaveReview,
                                                    disabled: savingReview,
                                                    className: "rounded-lg px-4 py-2 text-[13px] font-medium text-white disabled:opacity-60",
                                                    style: {
                                                        backgroundColor: "var(--accent)"
                                                    },
                                                    children: savingReview ? "Saving..." : "Save review"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1019,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowReviewForm(false),
                                                    className: "rounded-lg px-4 py-2 text-[13px] font-medium border",
                                                    style: {
                                                        borderColor: "var(--border)",
                                                        color: "var(--foreground)"
                                                    },
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1027,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1018,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 953,
                                    columnNumber: 15
                                }, this) : lead.review_rating || lead.review_comment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 15,
                                                    style: {
                                                        color: "var(--muted)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px]",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Rating"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1040,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[15px] ml-auto",
                                                    style: {
                                                        color: "#E69A1F"
                                                    },
                                                    children: lead.review_rating ? "★".repeat(lead.review_rating) + "☆".repeat(5 - lead.review_rating) : "Not rated"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1043,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 17
                                        }, this),
                                        lead.review_comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 pt-3 flex items-start gap-2",
                                            style: {
                                                borderTop: "1px solid var(--border)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareQuote$3e$__["MessageSquareQuote"], {
                                                    size: 15,
                                                    className: "mt-0.5 shrink-0",
                                                    style: {
                                                        color: "var(--muted)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1054,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px]",
                                                    style: {
                                                        color: "var(--foreground)"
                                                    },
                                                    children: lead.review_comment
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1050,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: 'No client review recorded yet. Click "Add review" to add one.'
                                }, void 0, false, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1062,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 929,
                                columnNumber: 11
                            }, this),
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border p-5",
                                style: {
                                    backgroundColor: "var(--surface)",
                                    borderColor: "var(--border)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[14px] font-medium mb-4",
                                        children: "Save changes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[12px] mb-1",
                                        style: {
                                            color: "var(--muted)"
                                        },
                                        children: "Note explaining what changed (required)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: saveNote,
                                        onChange: (e)=>setSaveNote(e.target.value),
                                        rows: 3,
                                        placeholder: "e.g. Customer confirmed travel dates, moving to In Process",
                                        className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none mb-3",
                                        style: {
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[12px] mb-1",
                                        style: {
                                            color: "var(--muted)"
                                        },
                                        children: "Your name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: saveActor,
                                        onChange: (e)=>setSaveActor(e.target.value),
                                        className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer mb-4",
                                        style: {
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 1093,
                                                columnNumber: 17
                                            }, this),
                                            employees.filter((e)=>e.is_active).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: e.name,
                                                    children: e.name
                                                }, e.id, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSaveChanges,
                                                disabled: saving,
                                                className: "rounded-lg px-5 py-2.5 text-[14px] font-medium text-white disabled:opacity-60",
                                                style: {
                                                    backgroundColor: "var(--accent)"
                                                },
                                                children: saving ? "Saving..." : "Save changes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: cancelEditing,
                                                className: "rounded-lg px-5 py-2.5 text-[14px] font-medium border",
                                                style: {
                                                    borderColor: "var(--border)",
                                                    color: "var(--foreground)"
                                                },
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 1068,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Itineraries",
                                action: lead.current_phase >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/leads/${leadId}/itineraries/new`,
                                    className: "flex items-center gap-1.5 text-[12px] font-medium",
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 19
                                        }, this),
                                        "New itinerary"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 17
                                }, this),
                                children: lead.current_phase < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-1.5 text-[13px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1140,
                                            columnNumber: 17
                                        }, this),
                                        "Move this lead to Phase 2 to add itineraries."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1136,
                                    columnNumber: 15
                                }, this) : itineraries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: "No itineraries yet. Create one to plan a day-by-day trip for this customer."
                                }, void 0, false, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1144,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: itineraries.map((itinerary)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-3 py-2.5 -mx-3 rounded-lg hover:bg-[var(--background)] transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/leads/${leadId}/itineraries/${itinerary.id}`,
                                                    className: "flex items-center gap-3 min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                            size: 15,
                                                            style: {
                                                                color: "var(--muted)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1158,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[13px] font-medium truncate",
                                                                    children: itinerary.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[12px]",
                                                                    style: {
                                                                        color: "var(--muted)"
                                                                    },
                                                                    children: [
                                                                        "By ",
                                                                        itinerary.created_by,
                                                                        " · ",
                                                                        formatDate(itinerary.created_at)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 1161,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1159,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteItinerary(itinerary.id),
                                                    className: "shrink-0 ml-3",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1166,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, itinerary.id, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Add a note",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleAddNote,
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: noteText,
                                            onChange: (e)=>setNoteText(e.target.value),
                                            rows: 3,
                                            placeholder: "Add an update, customer response, or anything worth recording...",
                                            className: "w-full rounded-lg border px-3 py-2.5 text-[13px] outline-none focus:border-[var(--primary-light)]",
                                            style: {
                                                backgroundColor: "var(--background)",
                                                borderColor: "var(--border)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: noteAuthor,
                                                    onChange: (e)=>setNoteAuthor(e.target.value),
                                                    className: "rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer flex-1",
                                                    style: {
                                                        backgroundColor: "var(--background)",
                                                        borderColor: "var(--border)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select your name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1196,
                                                            columnNumber: 19
                                                        }, this),
                                                        employees.filter((e)=>e.is_active).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: e.name,
                                                                children: e.name
                                                            }, e.id, false, {
                                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                                lineNumber: 1198,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "rounded-lg px-4 py-2 text-[13px] font-medium text-white shrink-0",
                                                    style: {
                                                        backgroundColor: "var(--accent)"
                                                    },
                                                    children: "Save note"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 1179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                title: "Activity log",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: activity.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 w-2 rounded-full mt-1.5",
                                                            style: {
                                                                backgroundColor: dotColor(item.type)
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1219,
                                                            columnNumber: 21
                                                        }, this),
                                                        i < activity.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-px flex-1 mt-1",
                                                            style: {
                                                                backgroundColor: "var(--border)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1224,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px]",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1228,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] mt-0.5",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: [
                                                                item.by,
                                                                " · ",
                                                                formatDateTime(item.at)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${item.type}-${item.id}`, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1217,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 1214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1",
                        children: lead.booking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            title: "Booking & payment",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4 text-[12px]",
                                    style: {
                                        color: "var(--muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1243,
                                            columnNumber: 17
                                        }, this),
                                        lead.booking.invoice_number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmountRow, {
                                            label: "Total amount",
                                            value: formatINR(lead.booking.total_amount)
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmountRow, {
                                            label: "Advance paid",
                                            value: formatINR(lead.booking.advance_paid),
                                            positive: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderTop: "1px solid var(--border)"
                                            },
                                            className: "pt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmountRow, {
                                                label: "Balance due",
                                                value: formatINR(lead.booking.balance_due),
                                                bold: true,
                                                danger: Number(lead.booking.balance_due) > 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/leads/[id]/page.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadInvoice,
                                    className: "w-full mt-5 rounded-lg px-4 py-2.5 text-[13px] font-medium border",
                                    style: {
                                        borderColor: "var(--border)",
                                        color: "var(--foreground)"
                                    },
                                    children: "Download invoice"
                                }, void 0, false, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1259,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 pt-5",
                                    style: {
                                        borderTop: "1px solid var(--border)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] font-medium",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "Payment history"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 19
                                                }, this),
                                                !showPaymentForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowPaymentForm(true),
                                                    className: "text-[12px] font-medium",
                                                    style: {
                                                        color: "var(--accent)"
                                                    },
                                                    children: "+ Add payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1273,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1268,
                                            columnNumber: 17
                                        }, this),
                                        showPaymentForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentForm, {
                                            employees: employees,
                                            onCancel: ()=>setShowPaymentForm(false),
                                            onSave: handleAddInstallment
                                        }, void 0, false, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1284,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 mt-3",
                                            children: [
                                                installments.length === 0 && !showPaymentForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px]",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "No payments recorded yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 21
                                                }, this),
                                                installments.map((inst)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-[12px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        color: "var(--foreground)"
                                                                    },
                                                                    children: [
                                                                        formatINR(inst.amount),
                                                                        " ",
                                                                        inst.payment_method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: "var(--muted)"
                                                                            },
                                                                            children: [
                                                                                "· ",
                                                                                inst.payment_method
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                                            lineNumber: 1303,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 1300,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        color: "var(--muted)"
                                                                    },
                                                                    children: [
                                                                        formatDate(inst.paid_on),
                                                                        " · ",
                                                                        inst.recorded_by
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                                                    lineNumber: 1306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, inst.id, false, {
                                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                                        lineNumber: 1298,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/leads/[id]/page.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/leads/[id]/page.tsx",
                                    lineNumber: 1267,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/leads/[id]/page.tsx",
                            lineNumber: 1241,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            title: "Booking & payment",
                            children: lead.status === "Confirmed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingForm, {
                                leadId: leadId,
                                onCreated: loadLead
                            }, void 0, false, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 1318,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px]",
                                style: {
                                    color: "var(--muted)"
                                },
                                children: [
                                    "No booking yet. Mark this lead as ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-medium",
                                        children: "Confirmed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/leads/[id]/page.tsx",
                                        lineNumber: 1321,
                                        columnNumber: 53
                                    }, this),
                                    " to add payment details."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/leads/[id]/page.tsx",
                                lineNumber: 1320,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/leads/[id]/page.tsx",
                            lineNumber: 1316,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/leads/[id]/page.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
_s(LeadDetailPage, "si1AKHnBw1W+cXpO/LoFlqFgPtw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LeadDetailPage;
function BookingForm({ leadId, onCreated }) {
    _s1();
    const [totalAmount, setTotalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [advancePaid, setAdvancePaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleSave(e) {
        e.preventDefault();
        if (!totalAmount) {
            alert("Enter the total amount.");
            return;
        }
        setSaving(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/leads/${leadId}/booking`, {
                total_amount: Number(totalAmount),
                advance_paid: Number(advancePaid || 0)
            });
            onCreated();
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to create booking.");
        } finally{
            setSaving(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSave,
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[12px] mb-1",
                        style: {
                            color: "var(--muted)"
                        },
                        children: "Total amount (₹)"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: totalAmount,
                        onChange: (e)=>setTotalAmount(e.target.value),
                        className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                        style: {
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[12px] mb-1",
                        style: {
                            color: "var(--muted)"
                        },
                        children: "Advance paid (₹)"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: advancePaid,
                        onChange: (e)=>setAdvancePaid(e.target.value),
                        className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none",
                        style: {
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1376,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: saving,
                className: "w-full rounded-lg px-4 py-2 text-[13px] font-medium text-white disabled:opacity-60",
                style: {
                    backgroundColor: "var(--accent)"
                },
                children: saving ? "Saving..." : "Create booking"
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/leads/[id]/page.tsx",
        lineNumber: 1359,
        columnNumber: 5
    }, this);
}
_s1(BookingForm, "0OL+8NXV0PsSk8KrZHyYY5CvoAc=");
_c1 = BookingForm;
function PaymentForm({ employees, onCancel, onSave }) {
    _s2();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paidOn, setPaidOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().slice(0, 10));
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [recordedBy, setRecordedBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mb-3 p-3 rounded-lg",
        style: {
            backgroundColor: "var(--background)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        placeholder: "Amount (₹)",
                        value: amount,
                        onChange: (e)=>setAmount(e.target.value),
                        className: "rounded-lg border px-3 py-2 text-[13px] outline-none",
                        style: {
                            backgroundColor: "var(--surface)",
                            borderColor: "var(--border)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: paidOn,
                        onChange: (e)=>setPaidOn(e.target.value),
                        className: "rounded-lg border px-3 py-2 text-[13px] outline-none",
                        style: {
                            backgroundColor: "var(--surface)",
                            borderColor: "var(--border)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: method,
                onChange: (e)=>setMethod(e.target.value),
                className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                style: {
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Payment method (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1435,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentMethodOptions"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: m,
                            children: m
                        }, m, false, {
                            fileName: "[project]/app/leads/[id]/page.tsx",
                            lineNumber: 1437,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: recordedBy,
                onChange: (e)=>setRecordedBy(e.target.value),
                className: "w-full rounded-lg border px-3 py-2 text-[13px] outline-none cursor-pointer",
                style: {
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Your name"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1448,
                        columnNumber: 9
                    }, this),
                    employees.filter((e)=>e.is_active).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: e.name,
                            children: e.name
                        }, e.id, false, {
                            fileName: "[project]/app/leads/[id]/page.tsx",
                            lineNumber: 1450,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSave(amount, paidOn, method, recordedBy),
                        className: "flex-1 rounded-lg px-3 py-2 text-[13px] font-medium text-white",
                        style: {
                            backgroundColor: "var(--accent)"
                        },
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "rounded-lg px-3 py-2 text-[13px] font-medium border",
                        style: {
                            borderColor: "var(--border)",
                            color: "var(--foreground)"
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/leads/[id]/page.tsx",
        lineNumber: 1411,
        columnNumber: 5
    }, this);
}
_s2(PaymentForm, "e89qGkAkbZLaK7R07aJ8urHnw3U=");
_c2 = PaymentForm;
function dotColor(type) {
    switch(type){
        case "created":
            return "#8A93A6";
        case "status":
            return "#2E7BD6";
        case "assignment":
            return "#7C6FE0";
        case "trip":
            return "#E69A1F";
        case "phase":
            return "#0F3D6E";
        case "phase3":
            return "#D4537E";
        case "note":
            return "#1A9E72";
    }
}
function Card({ title, children, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border p-5",
        style: {
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[14px] font-medium",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/leads/[id]/page.tsx",
                        lineNumber: 1508,
                        columnNumber: 9
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1507,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/leads/[id]/page.tsx",
        lineNumber: 1503,
        columnNumber: 5
    }, this);
}
_c3 = Card;
function InfoRow({ icon, label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 py-2 text-[13px]",
        style: {
            borderBottom: "1px solid var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--muted)"
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-32 shrink-0",
                style: {
                    color: "var(--muted)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--foreground)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1523,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/leads/[id]/page.tsx",
        lineNumber: 1518,
        columnNumber: 5
    }, this);
}
_c4 = InfoRow;
function AmountRow({ label, value, bold, positive, danger }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between text-[13px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--muted)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: bold ? "font-medium text-[15px]" : "",
                style: {
                    color: danger ? "var(--accent)" : positive ? "#1A9E72" : "var(--foreground)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/app/leads/[id]/page.tsx",
                lineNumber: 1544,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/leads/[id]/page.tsx",
        lineNumber: 1542,
        columnNumber: 5
    }, this);
}
_c5 = AmountRow;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "LeadDetailPage");
__turbopack_context__.k.register(_c1, "BookingForm");
__turbopack_context__.k.register(_c2, "PaymentForm");
__turbopack_context__.k.register(_c3, "Card");
__turbopack_context__.k.register(_c4, "InfoRow");
__turbopack_context__.k.register(_c5, "AmountRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_18atk4j._.js.map