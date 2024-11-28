document.querySelectorAll("form input").forEach(function(e){var t=e.name,l=document.createElement("label");l.classList.add("field-label"),l.setAttribute("for",e.id),l.textContent=t.toUpperCase(),e.before(l),e.setAttribute("placeholder",t[0].toUpperCase()+t.slice(1))});
//# sourceMappingURL=index.aac5afdf.js.map
