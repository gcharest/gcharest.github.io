{% if page.sections == "Ready For Use" or "Prêt à utiliser" %}
    {% if page.date %}
        {{ site.data.i18n.general.lastModified[page.lang] }}: {{ page.date | date: "%Y-%m-%d"}}
    {%endif%}
    {% if page.version %}
        {{ site.data.i18n.general.docVersionNumber[page.lang] }}: {{ page.version }}
    {% endif %}
{% endif %}
