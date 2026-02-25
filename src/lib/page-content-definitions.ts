export type ContentFieldType = "text" | "textarea" | "image" | "video" | "color" | "boolean";

export type ContentField = {
    name: string;
    label: string;
    type: ContentFieldType;
    defaultValue?: string;
    helperText?: string;
};

export type ContentSection = {
    key: string;
    label: string;
    description?: string;
    fields: ContentField[];
};

export type PageDefinition = {
    key: string;
    label: string;
    sections: ContentSection[];
};

export const PAGE_CONTENT_DEFINITIONS: Record<string, PageDefinition> = {
    global: {
        key: "global",
        label: "Global Settings",
        sections: [
            {
                key: "contact_info",
                label: "Footer Contact Information",
                description: "Contact details displayed in the footer across the website.",
                fields: [
                    { name: "address", label: "Address", type: "text", defaultValue: "Dotzheimerstr. 68 65197 Wiesbaden" },
                    { name: "phone", label: "Phone Number", type: "text", defaultValue: "0163 8562022" },
                    { name: "email", label: "Email Address", type: "text", defaultValue: "info@smilingstudio.de" },
                    { name: "whatsapp", label: "WhatsApp Number", type: "text", defaultValue: "0163 8562022" },
                ]
            },
            {
                key: "social_media",
                label: "Social Media Links",
                description: "Links to your social media profiles.",
                fields: [
                    { name: "facebook", label: "Facebook URL", type: "text", defaultValue: "https://www.facebook.com/smilingstudiowiesbaden/" },
                    { name: "instagram", label: "Instagram URL", type: "text", defaultValue: "https://www.instagram.com/smilingstudiowiesbaden" },
                    { name: "tiktok", label: "TikTok URL", type: "text", defaultValue: "https://www.tiktok.com/@smilingstudiowiesbaden" },
                ]
            },
            {
                key: "hours",
                label: "Opening Hours",
                fields: [
                    { name: "weekdays", label: "Mon - Fri", type: "text", defaultValue: "09:00 - 19:00" },
                    { name: "saturday", label: "Saturday", type: "text", defaultValue: "10:00 - 16:00" },
                    { name: "sunday", label: "Sunday", type: "text", defaultValue: "geschlossen" },
                ]
            }
        ]
    },
    home: {
        key: "home",
        label: "Home Page",
        sections: [
            {
                key: "hero",
                label: "Hero Section (Video)",
                description: "The main video/image shown at the top of the home page.",
                fields: [
                    { name: "videoUrl", label: "Video URL", type: "video", helperText: "Direct link to video file (mp4) or YouTube/Vimeo link.", defaultValue: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" },
                    { name: "fallbackImage", label: "Fallback Image", type: "image", helperText: "Shown while video loads or on mobile if video is disabled." },
                    { name: "titleDe", label: "Title (DE)", type: "text", defaultValue: "Willkommen im Smiling Studio" },
                    { name: "titleEn", label: "Title (EN)", type: "text", defaultValue: "Welcome to Smiling Studio" },
                    { name: "subtitleDe", label: "Subtitle (DE)", type: "text", defaultValue: "Ihr Ort für Entspannung & Schönheit" },
                    { name: "subtitleEn", label: "Subtitle (EN)", type: "text", defaultValue: "Your place for relaxation & beauty" },
                ]
            },
            {
                key: "welcome",
                label: "Welcome Section",
                fields: [
                    { name: "headingDe", label: "Heading (DE)", type: "text", defaultValue: "Willkommen bei Smiling Studio" },
                    { name: "headingEn", label: "Heading (EN)", type: "text", defaultValue: "Welcome to Smiling Studio" },
                    { name: "textDe", label: "Content (DE)", type: "textarea", defaultValue: "Wir laden Sie ein, den Alltag hinter sich zu lassen..." },
                    { name: "textEn", label: "Content (EN)", type: "textarea", defaultValue: "We invite you to leave everyday life behind..." },
                    { name: "image", label: "Side Image", type: "image" },
                ]
            },
            {
                key: "studio_gallery",
                label: "Studio Gallery",
                description: "The 5 images displayed in the Studio Space section.",
                fields: [
                    { name: "image1", label: "Image 1 (Main Large)", type: "image", defaultValue: "https://media.canva.com/v2/image-resize/format:JPG/height:600/quality:92/uri:ifs%3A%2F%2FM%2F21badc7c-666a-48e0-a684-beefd9e50311/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAIZbSy5URbAZqnp4zj9mttTwZO0YJZExK1Y-etRtTjl8&exp=1769805719&osig=AAAAAAAAAAAAAAAAAAAAAG9B5-xJevtUiRO8bPsC9mUa2YDe1duXVmu1MDnU3rk8&signer=media-rpc&x-canva-quality=screenhttps://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop" },
                    { name: "image2", label: "Image 2 (Top Left)", type: "image", defaultValue: "https://media.canva.com/v2/image-resize/format:JPG/height:600/quality:92/uri:ifs%3A%2F%2FM%2Fb611e909-05ae-46c5-97e2-13d25b94bf6c/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAPqszJ2eIoOgowTBAdHePYryONiZjtVnqB6RHWt8rK2-&exp=1769806844&osig=AAAAAAAAAAAAAAAAAAAAALJg78kFKRs1fwP8cc5lKxV-rD6PFEYhCRoz4GXFkKrX&signer=media-rpc&x-canva-quality=screen" },
                    { name: "image3", label: "Image 3 (Top Right)", type: "image", defaultValue: "https://media.canva.com/v2/image-resize/format:JPG/height:600/quality:92/uri:ifs%3A%2F%2FM%2Fa07e1fea-cb57-4482-9e28-14b1f2820103/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAPBRFtPNgQIjsCsjwRBt9XJawO-LgZ2EZF5k36jYzX3q&exp=1769804830&osig=AAAAAAAAAAAAAAAAAAAAAGzKF2UwJs5zD4AfDiheW9g5Ps_ACcwdTNj-QsqLyxcr&signer=media-rpc&x-canva-quality=screen" },
                    { name: "image4", label: "Image 4 (Bottom Left)", type: "image", defaultValue: "https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2F88f0b44d-778f-434e-839b-5b7db4caa8a1/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAAGoAh3JsmSOsXWeUEFXIaLgZbIxZeTxQipo-b2Oyd282&exp=1769804701&osig=AAAAAAAAAAAAAAAAAAAAADTpfTwCbr_NxSWs2ZfHZPAlmfM56S4JVhS59T8w2qjt&signer=media-rpc&x-canva-quality=screen" },
                    { name: "image5", label: "Image 5 (Bottom Right)", type: "image", defaultValue: "https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2F1f55ba98-6271-4340-ad5b-92b4e28f1b15/watermark:F/width:600?csig=AAAAAAAAAAAAAAAAAAAAAJF9my3Yp244QZ8W_LNiO13u6KtbULYtW49TUoVPQiOz&exp=1769807200&osig=AAAAAAAAAAAAAAAAAAAAADVTMlJjpuGKO4cwmCx7ZTIcogzg53bJQrdDXX27RTYO&signer=media-rpc&x-canva-quality=screen" },
                ]
            },
            {
                key: "services_section",
                label: "Services Images",
                description: "The background images for the 4 service cards.",
                fields: [
                    { name: "headspa", label: "Headspa Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop" },
                    { name: "permanent", label: "Permanent Make Up Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" },
                    { name: "nails", label: "Nails Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop" },
                    { name: "lashes", label: "Lashes/Wimpern Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop" },
                ]
            }
        ]
    },
    services_page: {
        key: "services_page",
        label: "Services Page",
        sections: [
            {
                key: "service_cards",
                label: "Service Cards",
                description: "Manage images and titles for the service cards on the main Services page.",
                fields: [
                    // Headspa
                    { name: "headspa_image", label: "Headspa Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop" },
                    { name: "headspa_title_de", label: "Headspa Title (DE)", type: "text", defaultValue: "HEADSPA" },
                    { name: "headspa_title_en", label: "Headspa Title (EN)", type: "text", defaultValue: "HEADSPA" },

                    // Permanent Make Up
                    { name: "permanent_image", label: "Permanent Make Up Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" },
                    { name: "permanent_title_de", label: "Permanent Make Up Title (DE)", type: "text", defaultValue: "PERMANENT MAKE UP" },
                    { name: "permanent_title_en", label: "Permanent Make Up Title (EN)", type: "text", defaultValue: "PERMANENT MAKE UP" },

                    // Nails
                    { name: "nails_image", label: "Nails Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop" },
                    { name: "nails_title_de", label: "Nails Title (DE)", type: "text", defaultValue: "NAILS" },
                    { name: "nails_title_en", label: "Nails Title (EN)", type: "text", defaultValue: "NAILS" },

                    // Lashes
                    { name: "wimpern_image", label: "Lashes/Wimpern Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop" },
                    { name: "wimpern_title_de", label: "Lashes Title (DE)", type: "text", defaultValue: "WIMPERN" },
                    { name: "wimpern_title_en", label: "Lashes Title (EN)", type: "text", defaultValue: "EYELASHES" },

                    // Eyebrows
                    { name: "augenbrauen_image", label: "Eyebrows Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop" },
                    { name: "augenbrauen_title_de", label: "Eyebrows Title (DE)", type: "text", defaultValue: "AUGENBRAUEN" },
                    { name: "augenbrauen_title_en", label: "Eyebrows Title (EN)", type: "text", defaultValue: "EYEBROWS" },
                ]
            }
        ]
    },
    pricelist_page: {
        key: "pricelist_page",
        label: "Price List Page",
        sections: [
            {
                key: "menu_image",
                label: "Menu Image",
                description: "The main image showing the price list/menu.",
                fields: [
                    { name: "image", label: "Price List Image", type: "image", defaultValue: "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/" },
                ]
            }
        ]
    },
    offers_page: {
        key: "offers_page",
        label: "Offers (Angebote)",
        sections: [
            {
                key: "offer_1",
                label: "Offer Card 1",
                fields: [
                    { name: "visible", label: "Show this offer?", type: "boolean", defaultValue: "true" },
                    { name: "valid_until", label: "Valid Until", type: "text", defaultValue: "31.03.2025" },
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "Headspa + Wimpern Kombi" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "Headspa + Lashes Combo" },
                    { name: "desc_de", label: "Description (DE)", type: "textarea", defaultValue: "Komplette Entspannung mit Headspa und Wimpernverlängerung" },
                    { name: "desc_en", label: "Description (EN)", type: "textarea", defaultValue: "Complete relaxation with headspa and lash extensions" },
                    { name: "old_price", label: "Old Price (e.g. 180€)", type: "text", defaultValue: "180€" },
                    { name: "new_price", label: "New Price (e.g. 150€)", type: "text", defaultValue: "150€" },
                ]
            },
            {
                key: "offer_2",
                label: "Offer Card 2",
                fields: [
                    { name: "visible", label: "Show this offer?", type: "boolean", defaultValue: "true" },
                    { name: "valid_until", label: "Valid Until", type: "text", defaultValue: "28.02.2025" },
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "Nageldesign Aktion" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "Nail Design Special" },
                    { name: "desc_de", label: "Description (DE)", type: "textarea", defaultValue: "Maniküre mit Gel-Lack inklusive Design" },
                    { name: "desc_en", label: "Description (EN)", type: "textarea", defaultValue: "Manicure with gel polish including design" },
                    { name: "old_price", label: "Old Price", type: "text", defaultValue: "65€" },
                    { name: "new_price", label: "New Price", type: "text", defaultValue: "50€" },
                ]
            },
            {
                key: "offer_3",
                label: "Offer Card 3",
                fields: [
                    { name: "visible", label: "Show this offer?", type: "boolean", defaultValue: "true" },
                    { name: "valid_until", label: "Valid Until", type: "text", defaultValue: "Unbegrenzt" },
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "Neukundenrabatt" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "New Customer Discount" },
                    { name: "desc_de", label: "Description (DE)", type: "textarea", defaultValue: "10% Rabatt auf die erste Behandlung" },
                    { name: "desc_en", label: "Description (EN)", type: "textarea", defaultValue: "10% off your first treatment" },
                    { name: "discount", label: "Discount Display (e.g. 10%)", type: "text", defaultValue: "10%" },
                ]
            }
        ]
    },
    giftcard_page: {
        key: "giftcard_page",
        label: "Gift Card Page",
        sections: [
            {
                key: "payment_qr",
                label: "Payment QR Code",
                description: "The QR code image for PayPal payment.",
                fields: [
                    { name: "qr_image", label: "QR Code Image", type: "image", defaultValue: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://paypal.me/hoangrealt" },
                ]
            }
        ]
    },
    headspa_page: {
        key: "headspa_page",
        label: "Headspa Page",
        sections: [
            {
                key: "hero",
                label: "Hero Section",
                description: "Main title and video displayed at the top of the Headspa page.",
                fields: [
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "HEADSPA" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "HEADSPA" },
                    { name: "video_url", label: "Hero Video URL", type: "video", defaultValue: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4", helperText: "Upload video or paste URL" },
                    { name: "typewriter_text_de", label: "Typewriter Text (DE)", type: "text", defaultValue: "Entspannung für Körper und Geist" },
                    { name: "typewriter_text_en", label: "Typewriter Text (EN)", type: "text", defaultValue: "Relaxation for Body and Mind" },
                ]
            },
            {
                key: "package_images",
                label: "Package Images",
                description: "Images for the 6 Headspa packages displayed on the page.",
                fields: [
                    { name: "package1_image", label: "Signature Asian Head Calm Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop" },
                    { name: "package2_image", label: "Headspa Essential Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop" },
                    { name: "package3_image", label: "Headspa Deluxe Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop" },
                    { name: "package4_image", label: "Headspa Signature Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop" },
                    { name: "package5_image", label: "Headspa Detox Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" },
                    { name: "package6_image", label: "Headspa Together Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop" },
                ]
            },
            {
                key: "menu_image",
                label: "Price Menu Image",
                description: "The pricing/menu image shown on the page.",
                fields: [
                    { name: "image", label: "Menu Image", type: "image", defaultValue: "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/" },
                ]
            }
        ]
    },
    permanent_makeup_page: {
        key: "permanent_makeup_page",
        label: "Permanent Make Up Page",
        sections: [
            {
                key: "hero",
                label: "Hero Section",
                description: "Main title and video displayed at the top of the Permanent Make Up page.",
                fields: [
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "PERMANENT MAKE UP" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "PERMANENT MAKE UP" },
                    { name: "video_url", label: "Hero Video URL", type: "video", defaultValue: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4", helperText: "Upload video or paste URL" },
                ]
            },
            {
                key: "service_images",
                label: "Service Images",
                description: "Images for the 3 main services: Brows, Lips, Eyes.",
                fields: [
                    { name: "brows_image", label: "Brows Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop" },
                    { name: "lips_image", label: "Lips Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=400&fit=crop" },
                    { name: "eyes_image", label: "Eyes Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop" },
                ]
            },
            {
                key: "menu_image",
                label: "Price Menu Image",
                description: "The pricing/menu image shown on the page.",
                fields: [
                    { name: "image", label: "Menu Image", type: "image", defaultValue: "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/" },
                ]
            }
        ]
    },
    nails_page: {
        key: "nails_page",
        label: "Nails Page",
        sections: [
            {
                key: "hero",
                label: "Hero Section",
                description: "Main title displayed at the top of the Nails page.",
                fields: [
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "NAILS" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "NAILS" },
                ]
            },
            {
                key: "service_images",
                label: "Service Images",
                description: "Images for the 2 main services: Nagelmodellage and Fusspflege.",
                fields: [
                    { name: "nagelmodellage_image", label: "Nagelmodellage Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop" },
                    { name: "fusspflege_image", label: "Fusspflege Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop" },
                ]
            },
            {
                key: "menu_image",
                label: "Price Menu Image",
                description: "The pricing/menu image shown on the page.",
                fields: [
                    { name: "image", label: "Menu Image", type: "image", defaultValue: "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/" },
                ]
            }
        ]
    },
    wimpern_page: {
        key: "wimpern_page",
        label: "Wimpern/Lashes Page",
        sections: [
            {
                key: "hero",
                label: "Hero Section",
                description: "Main title displayed at the top of the Lashes page.",
                fields: [
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "WIMPERN" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "EYELASHES" },
                ]
            },
            {
                key: "service_images",
                label: "Service Images",
                description: "Images for the 2 main services: Wimpernverlängerung and Wimpernwelle.",
                fields: [
                    { name: "verlangerung_image", label: "Wimpernverlängerung Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop" },
                    { name: "welle_image", label: "Wimpernwelle (Lifting) Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" },
                ]
            },
            {
                key: "menu_image",
                label: "Price Menu Image",
                description: "The pricing/menu image shown on the page.",
                fields: [
                    { name: "image", label: "Menu Image", type: "image", defaultValue: "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/" },
                ]
            }
        ]
    },
    augenbrauen_page: {
        key: "augenbrauen_page",
        label: "Augenbrauen/Eyebrows Page",
        sections: [
            {
                key: "hero",
                label: "Hero Section",
                description: "Main title displayed at the top of the Eyebrows page.",
                fields: [
                    { name: "title_de", label: "Title (DE)", type: "text", defaultValue: "AUGENBRAUEN" },
                    { name: "title_en", label: "Title (EN)", type: "text", defaultValue: "EYEBROWS" },
                ]
            },
            {
                key: "service_images",
                label: "Service Images",
                description: "Images for the 2 main services: Zupfen & Färben and Laminieren.",
                fields: [
                    { name: "zupfen_image", label: "Zupfen & Färben Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop" },
                    { name: "laminieren_image", label: "Laminieren Image", type: "image", defaultValue: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" },
                ]
            },
            {
                key: "menu_image",
                label: "Price Menu Image",
                description: "The pricing/menu image shown on the page.",
                fields: [
                    { name: "image", label: "Menu Image", type: "image", defaultValue: "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/" },
                ]
            }
        ]
    }
};
