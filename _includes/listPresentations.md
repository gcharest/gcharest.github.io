### {{ site.data.i18n.general.presentations[page.lang] }}

_{{ site.data.i18n.general.printPDFNotice[page.lang] }}_

<ul class="post-list list-group list-group-flush">
{%- if page.lang == "fr" -%}
  {%- for pres in site.static_files -%}
    {%- if pres.path contains 'presentations/fr' -%}
    <li class="list-group-item">
      <strong>
        <a target="_blank" href="presentation.html?markdown=fr/{{ pres.path | replace: "/presentations/fr/", ""  }}">
          {{ pres.path | replace: "/presentations/fr/", "" | replace: ".md", "" }}
        </a>
      </strong>
      (<a target="_blank" href="presentation.html?markdown=en/{{ pres.path | replace: "/presentations/en/", ""  }}&print-pdf">
          {{ site.data.i18n.general.printPDF[page.lang] }}/
      </a>
      <a target="_blank" href="presentation.html?markdown=en/{{ pres.path | replace: "/presentations/en/", ""  }}&shownotes&print-pdf">
          {{ site.data.i18n.general.printPDFNotes[page.lang] }}
      </a>)
    </li>
    {%- endif -%}
  {%- endfor -%}
{%- else -%}
  {%- for pres in site.static_files -%}
    {%- if pres.path contains 'presentations/en' -%}
    <li class="list-group-item">
      <strong>
        <a target="_blank" href="presentation.html?markdown=en/{{ pres.path | replace: "/presentations/en/", ""  }}">
          {{ pres.path | replace: "/presentations/en/", "" | replace: ".md", "" }}
        </a>
      </strong>
      (<a target="_blank" href="presentation.html?markdown=en/{{ pres.path | replace: "/presentations/en/", ""  }}&print-pdf">
          {{ site.data.i18n.general.printPDF[page.lang] }}
      </a>
      <a target="_blank" href="presentation.html?markdown=en/{{ pres.path | replace: "/presentations/en/", ""  }}&shownotes&print-pdf">
          / {{ site.data.i18n.general.printPDFNotes[page.lang] }}
      </a>)
    </li>
    {%- endif -%}
  {%- endfor -%}
{%- endif -%}
</ul>
