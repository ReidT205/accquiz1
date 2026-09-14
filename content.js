window.ACC_CONTENT = {};
window.ACC_READY = (async () => {
  const ids = ["accounts", "statements", "practice"];
  await Promise.all(ids.map(async (id) => {
    const res = await fetch("/panel-" + id + ".html");
    window.ACC_CONTENT[id] = await res.text();
  }));
})();
