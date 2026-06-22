export interface RenderInterface {
  name: string;
  zone: string;
  phone: string;
}

export class Parametres {
  private el: HTMLElement;

  constructor(mountPoint: HTMLElement) {
    this.el = mountPoint;
  }
  render(renderInterface: RenderInterface): void {
    this.el.innerHTML = `
      <div class="section-view" id="section-settings">
        <div class="catalog-head">
          <h2>Paramètres</h2>
          <div class="sub">Préférences du compte vendeur</div>
        </div>
        <div class="settings-stack">
          <div class="settings-card">
            <h4>Profil vendeur</h4>
            <div class="settings-profile">
              <div class="avatar" style="width:44px; height:44px; font-size:13px;">AM</div>
              <div>
                <div class="settings-profile-name">${renderInterface.name}</div>
                <div class="settings-profile-role">${renderInterface.zone}</div>
              </div>
            </div>
            <div class="field"><label>Nom complet</label><input type="text" >${renderInterface.name}</div>
            <div class="field"><label>Téléphone</label><input type="text" >${renderInterface.phone}</div>
            <div class="field" style="margin-bottom:0;"><label>Zone de vente</label><input type="text">${renderInterface.zone}</div>
          </div>

          <div class="settings-card">
            <h4>Préférences de vente</h4>
            <div class="toggle-row">
              <div><div class="toggle-lab">Confirmer chaque vente automatiquement</div><div class="toggle-desc">Passe à l'écran de confirmation sans validation supplémentaire</div></div>
              <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
            </div>
            <div class="toggle-row">
              <div><div class="toggle-lab">Envoyer les reçus par SMS</div><div class="toggle-desc">Un message récapitulatif est envoyé à la cliente</div></div>
              <label class="switch"><input type="checkbox"><span class="slider"></span></label>
            </div>
            <div class="toggle-row">
              <div><div class="toggle-lab">Mode hors-ligne prioritaire</div><div class="toggle-desc">Enregistre les ventes localement avant synchronisation</div></div>
              <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
            </div>
          </div>

          <div class="settings-card">
            <h4>Notifications</h4>
            <div class="toggle-row">
              <div><div class="toggle-lab">Nouvelles commandes</div><div class="toggle-desc">Alerte à chaque vente enregistrée par l'équipe</div></div>
              <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
            </div>
            <div class="toggle-row">
              <div><div class="toggle-lab">Rappel de stock faible</div><div class="toggle-desc">Notification quand un produit est presque épuisé</div></div>
              <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
            </div>
            <div class="toggle-row">
              <div><div class="toggle-lab">Résumé quotidien</div><div class="toggle-desc">Récapitulatif des ventes du jour à 19h</div></div>
              <label class="switch"><input type="checkbox"><span class="slider"></span></label>
            </div>
          </div>

          <div class="settings-card">
            <h4>Sécurité</h4>
            <button class="btn-cancel" style="width:100%; margin-bottom:10px;" onclick="showToast('Lien envoyé par SMS')">Changer le mot de passe</button>
            <button class="btn-cancel" style="width:100%; color:var(--rust);" onclick="showToast('Déconnecté de tous les appareils')">Déconnexion de tous les appareils</button>
          </div>
        </div>
      </div>
    `;
  }
}
