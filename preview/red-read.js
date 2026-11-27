/* Browser-local alert read receipts. This never changes task or approval state. */
(function(root) {
  const STORAGE_KEY = 'office.redRead.v1';
  function version(item) {
    return JSON.stringify(['alert_id','occurrence_id','event_id','report_id','id','created_at','raised_at','revision'].map(k => String(item[k] || '')));
  }
  function group(item) { return JSON.stringify([item.room || '', item.title || '']); }
  function fingerprint(item) { return JSON.stringify([group(item), item.detail || '', item.ackVersion || '']); }
  function create(storage) {
    let receipts = {};
    try { const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || '{}'); if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) receipts = parsed; } catch (_) {}
    let saved = true;
    const save = () => { try { storage.setItem(STORAGE_KEY, JSON.stringify(receipts)); saved = true; } catch (_) { saved = false; } return saved; };
    return {
      isRead: item => !!receipts[fingerprint(item)],
      mark(items) { items.forEach(item => { receipts[fingerprint(item)] = Date.now(); }); return save(); },
      reconcile(items) { const present = new Set(items.map(fingerprint)); const next = Object.fromEntries(Object.entries(receipts).filter(([key]) => present.has(key))); if (JSON.stringify(next) !== JSON.stringify(receipts)) { receipts = next; save(); } },
      get saved() { return saved; }
    };
  }
  const api = {create, version, group, fingerprint};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.RedRead = api;
})(typeof window !== 'undefined' ? window : globalThis);
