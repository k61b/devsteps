<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-rose-100 border-t-2 border-rose-200 py-12">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="text-2xl font-bold text-rose-800 mb-4">{m.site_title()}</div>
        <p class="text-rose-700">{m.footer_description()}</p>
      </div>
      <div>
        <h4 class="font-semibold text-rose-900 mb-4">{m.footer_platform()}</h4>
        <ul class="space-y-2">
          <li><a href="/#why" class="text-rose-700 hover:text-rose-900 transition">{m.nav_why()}</a></li>
          <li><a href="/#paths" class="text-rose-700 hover:text-rose-900 transition">{m.nav_paths()}</a></li>
          <li><a href="/browse-courses" class="text-rose-700 hover:text-rose-900 transition">{m.nav_courses()}</a></li>
          <li><a href="/#faq" class="text-rose-700 hover:text-rose-900 transition">{m.nav_faq()}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-rose-900 mb-4">{m.footer_community()}</h4>
        <ul class="space-y-2">
          <li>
            <a
              href="https://www.reddit.com/r/devsteps/"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_reddit()}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/k61b/devsteps"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_github()}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/k61b/devsteps/pulls"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_prs()}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-rose-900 mb-4">{m.footer_resources()}</h4>
        <ul class="space-y-2">
          <li>
            <a
              href="https://github.com/k61b/devsteps#readme"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_docs()}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/k61b/devsteps/issues"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_roadmap()}
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/devsteps/"
              target="_blank"
              rel="noreferrer"
              class="text-rose-700 hover:text-rose-900 transition"
            >
              {m.footer_announcements()}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t-2 border-rose-200 pt-8 text-center">
      <p class="text-rose-600 text-sm">&copy; {currentYear} {m.site_title()}. {m.footer_copyright()}</p>
    </div>
  </div>
</footer>
