{%- assign aPost = site.posts | where:"lang", page.lang -%}
{% if aPost.size > 0%}

  <ul class="post-list">
    {% for post in aPost %}
      <li>
        <strong>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a>
        </strong>
        <p>{{ post.date | date: "%Y-%M-%d" }}</p>
      </li>
    {% endfor %}
  </ul>
{% endif %}
