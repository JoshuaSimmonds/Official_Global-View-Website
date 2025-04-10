document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-button").addEventListener("click", function() {
        var query = document.getElementById("searchbar").value.trim().toLowerCase();
        
        switch (query) {
            case "booking":
                case "book now":
                    case "book flight":
                window.location.href = "FINAL_booking.html";
                break;
            case "destinations":
            case "explore":
                case "caribbean":
                    case "countries":
                        case "south america":
                            case "europe":
                                case "asia":
                window.location.href = "FINAL_Explore Global View.html";
                break;
            case "faq":
                case "frequently asked questions":
                    case "refunds":
                        case "paymenst":
                window.location.href = "FINAL_FAQ.html";
                break;
            case "about us global view":
                case "ratings":
                    case "feedback":
                        case "reviews":
                window.location.href = "FINAL_About us Global View.html";
                break;
            case "jamaica":
                window.location.href = "Jamaica_Destination.html";
                break;
            case "contact us":
                case "email":
                window.location.href = "FINAL_ContactUs.html";
                break;
            case "login":
                window.location.href = "FINAL_login.html";
                break;
            default:
                alert("No matching page found.");
        }
    });
});