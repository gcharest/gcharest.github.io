{%- if site.paginate -%}
  {%- assign aPost = paginator.posts | where:"lang", page.lang -%}
{%- else -%}
  {%- assign aPost = site.posts | where:"lang", page.lang -%}
{%- endif -%}

{% if aPost.size > 0%}
  <ul class="list-group list-group-flush">
    {% for post in aPost %}
      <li class="list-group-item">
        <span class="post-date" >{{ post.date | date: "%Y-%m-%d"}}</span>
        <h3>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a>
        </h3>
        <p>
        {{ post.excerpt | strip_html}}
        </p>
      </li>
    {% endfor %}
  </ul>
{% endif %}
