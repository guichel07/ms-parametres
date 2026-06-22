// @vitest-environment jsdom
import { describe, test, expect, beforeEach } from 'vitest';
import { Parametres } from './index'; // À ajuster selon ton arborescence
import type { RenderInterface } from './index';

describe('Parametres Component', () => {
  let parametresComponent: Parametres;
  let mockData: RenderInterface;

  beforeEach(() => {
    // 1. Nettoyage et initialisation du DOM
    document.body.innerHTML = '';

    // 2. Initialisation du composant
    parametresComponent = new Parametres(document.body);

    // 3. Jeu de données de test (Mock)
    mockData = {
      name: 'Frédéric Jean-Christophe',
      zone: 'Zone Nord',
      phone: '+221 77 234 56 78',
    };
  });

  // TEST 1 : Vérification de la structure globale HTML
  test('Should render the complete settings layout', () => {
    parametresComponent.render(mockData);

    expect(document.querySelector('#section-settings')).not.toBeNull();
    expect(document.querySelectorAll('.settings-card').length).toBe(4);
    expect(document.querySelector('h2')?.textContent).toBe('Paramètres');
  });

  // TEST 2 : Injection dynamique des données du profil vendeur
  test('Should correctly display profile information from renderInterface', () => {
    parametresComponent.render(mockData);

    const profileName = document.querySelector('.settings-profile-name');
    const profileRole = document.querySelector('.settings-profile-role');

    expect(profileName?.textContent).toBe(mockData.name);
    expect(profileRole?.textContent).toBe(mockData.zone);
  });

  // TEST 3 : Affichage des champs de saisie (inputs et textes)
  test('Should contain the seller data next to input fields', () => {
    parametresComponent.render(mockData);

    const fields = Array.from(document.querySelectorAll('.field')).map(
      (el) => el.textContent
    );

    // Vérification que le texte injecté correspond aux données passées en paramètre
    expect(fields[0]).toContain(`Nom complet${mockData.name}`);
    expect(fields[1]).toContain(`Téléphone${mockData.phone}`);
    expect(fields[2]).toContain(`Zone de vente${mockData.zone}`);
  });

  // TEST 4 : État initial par défaut des cases à cocher (Toggles)
  test('Should check the default configuration for switches', () => {
    parametresComponent.render(mockData);

    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.switch input[type="checkbox"]'
    );

    // Confirmer chaque vente automatiquement (checked)
    expect(checkboxes[0].checked).toBe(true);
    // Envoyer les reçus par SMS (non checked)
    expect(checkboxes[1].checked).toBe(false);
    // Mode hors-ligne prioritaire (checked)
    expect(checkboxes[2].checked).toBe(true);
    // Nouvelles commandes (checked)
    expect(checkboxes[3].checked).toBe(true);
    // Rappel de stock faible (checked)
    expect(checkboxes[4].checked).toBe(true);
    // Résumé quotidien (non checked)
    expect(checkboxes[5].checked).toBe(false);
  });
});
