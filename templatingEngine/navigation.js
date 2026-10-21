import fs from "fs";
import { documentationPages } from "./pages.js";

export function readHeadings(filePath) {
    const html = fs.readFileSync(filePath, "utf8");
    const headings = [];
    const articleStart = html.indexOf('<article class="documentation-content">');
    const articleEnd = html.indexOf("</article>", articleStart);
    const article = html.slice(articleStart, articleEnd);

    const parts = article.split("<h2");

    parts.slice(1).forEach(part => {
        const openingTagEnd = part.indexOf(">");
        const closingTagStart = part.indexOf("</h2>");

        if (openingTagEnd === -1 || closingTagStart === -1) {
            return;
        }

        const openingTag = part.slice(0, openingTagEnd);
        const text = part.slice(openingTagEnd + 1, closingTagStart).trim();

        let id = null;

        const idStart = openingTag.indexOf('id="');

        if (idStart !== -1) {
            const valueStart = idStart + 4;
            const valueEnd = openingTag.indexOf('"', valueStart);

            id = openingTag.slice(valueStart, valueEnd);
        }

        headings.push({ id, text });
    });

    return headings;
}

export function createSectionLinks(headings, pageRoute) {

    const linksFromHeadings = headings.map(heading => {
        if (heading.id === null) {
            return `<li>${heading.text}</li>`;
        }

        return `<li><a href="${pageRoute}#${heading.id}">${heading.text}</a></li>`;
    });

    return linksFromHeadings.join("\n");
}


export function createSubjectGroups(currentRoute) {

    const subjectGroups = documentationPages.map(page => {
        const headings = readHeadings(page.file);

        const pageRoute = page.route === currentRoute ? "" : page.route;
        const sectionLinks = createSectionLinks(headings, pageRoute);

        return `<li>
    <details data-route="${page.route}">
        <summary>${page.title}</summary>
        <ul>
            ${sectionLinks}
        </ul>
    </details>
</li>`;
    });

    return subjectGroups.join("\n");
}
