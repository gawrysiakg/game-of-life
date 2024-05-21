# Game of Life

Projekt symulujący "Game of Life" zgodnie z zasadami opisanymi na stronie [Wikipedia](https://pl.wikipedia.org/wiki/Gra_w_%C5%BCycie). Projekt został stworzony w oparciu o framework Angular.

## Online demo:

https://gawrysiakg.github.io/game-of-life/index.html

## Opis

Game of Life jest symulacją komórkową, w której każda komórka na planszy może znajdować się w jednym z dwóch stanów: żywa lub martwa. Stany te zmieniają się w kolejnych generacjach zgodnie z określonymi zasadami:

- Żywa komórka z mniej niż dwoma żywymi sąsiadami umiera z powodu niedożywienia.
- Żywa komórka z dwoma lub trzema żywymi sąsiadami przeżywa do następnej generacji.
- Żywa komórka z więcej niż trzema żywymi sąsiadami umiera z powodu przeludnienia.
- Martwa komórka z dokładnie trzema żywymi sąsiadami staje się żywa w wyniku reprodukcji.

## Funkcje

- Umożliwia użytkownikowi ustawienie stanu komórek na planszy (żywe/martwe).
- Pozwala na rozpoczęcie symulacji, zatrzymanie oraz resetowanie planszy.
- Automatycznie oblicza kolejne generacje według zasad "Game of Life".

## Użycie

1. Otwórz aplikację w przeglądarce, załaduje się losowa plansza.
2. Ustaw stan komórek na planszy poprzez kliknięcie na odpowiednie pola.
3. Rozpocznij symulację lub zatrzymaj ją za pomocą przycisków.
4. W razie potrzeby zresetuj planszę do stanu początkowego.

## Technologie

Aplikacja została zbudowana w oparciu o następujące technologie:

- Angular: Framework do budowania interaktywnych aplikacji internetowych [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1
- TypeScript: Rozszerzenie języka JavaScript, używane do programowania aplikacji w Angularze.

## Uruchomienie lokalne

Jeśli chcesz uruchomić aplikację lokalnie na swoim komputerze, wykonaj następujące kroki:

1. Sklonuj repozytorium na swój lokalny komputer:
   git clone https://github.com/gawrysiakg/game-of-life.git

2. Przejdź do katalogu projektu:
   cd game-of-life

3. Zainstaluj zależności za pomocą npm:
   npm install

4. Uruchom aplikację:
   ng serve

5. Otwórz przeglądarkę internetową i przejdź pod adres:
   http://localhost:4200/

#

Autor: GG
