{% assign sections = site.data.i18n.general.sectionsList[page.lang] %}
{% for section in sections %}
{% assign aPage = site.pages | where:"sections", section | where:"lang", page.lang | sort: "title" %}

{%- if aPage.size > 0 -%}

### {{ section }}

<ul class="list-group list-group-flush">
  {%- for page in aPage -%}
    <li class="list-group-item">
      <h4>
        <a href="{{ page.url | relative_url }}">
          {{ page.title | escape }}
        </a>
      </h4>
      {{ page.description }}
    </li>
  {%- endfor -%}
</ul>

{%- endif -%}
{%- endfor -%}
