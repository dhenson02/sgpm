var h = require("virtual-dom/h");

function renderLink ( link ) {
	return (
		h("li#ph-link-" + link.id + link.level, link.attr, [
			h("a", {
				href: link.href,
				target: ( link.href.charAt(0) !== "#" ) ? "_blank" : ""
			}, [
				( !link.icon ) ? null : h("i.icon.icon-" + link.icon),
				String(link.title),
				h("span.place")
			]),
			link.hr
		])
	);
}

function renderSection ( section ) {
	var links = [],
		i = 0,
		count = section.links.length;
	for ( ; i < count; ++i ) {
		links[i] = renderLink(section.links[i]);
	}
	return (
		h("li.ph-section.link", [
			h("p", [
				h("a", { "href": section.path }, [String(section.title)])
			]),
			h("hr"),
			h("ul", links)
		])
	);
}

function renderNav ( sections ) {
	var links = [],
		name;

	for ( name in sections ) {
		if ( sections.hasOwnProperty(name) ) {
			links.push(renderSection(sections[name]));
		}
	}
	return (
		h("#ph-nav", [
			h(".header", [
				h("a", {
					"href": "#/"
				}, [
					h(".logo", [
						h("img", {
							"src": "https://jsbin-user-assets.s3.amazonaws.com/dhenson02/phLogo64-gs.png",
							"alt": "Public Health Home",
							"height": "64",
							"width": "64"
						})
					]),
					h("p.text", [
						"Public Health",
						h("br"),
						h("small", ["US Air Force"])
					])
				])
			]),
			h("#ph-site-pages", [
				h("div", [
					h("a.site-page", { href: "#/leaders" }, ["Leaders"]),
					h("a.site-page", { href: "#/news" }, ["News"]),
					h("a.site-page", { href: "#/contact" }, ["Address Book"])
				])
			]),
			h("ul.nav", links)
		])
	);
}

module.exports = renderNav;
