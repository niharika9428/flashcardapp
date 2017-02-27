System.register(['angular2/core', './word.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, word_component_1;
    var AppComponent, wordlist1, wordlist2, wordlist3, wordlist4, wordlist5, wordlist6, wordlist7, wordlist8, wordlist9, wordlist10;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (word_component_1_1) {
                word_component_1 = word_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.wordlist1 = wordlist1;
                    this.wordlist2 = wordlist2;
                    this.wordlist3 = wordlist3;
                    this.wordlist4 = wordlist4;
                    this.wordlist5 = wordlist5;
                    this.wordlist6 = wordlist6;
                    this.wordlist7 = wordlist7;
                    this.wordlist8 = wordlist8;
                    this.wordlist9 = wordlist9;
                    this.wordlist10 = wordlist10;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'fc-app',
                        directives: [word_component_1.WordComponent],
                        templateUrl: 'partials/app.component.html',
                        styleUrls: ['css/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            wordlist1 = [
                {
                    "id": 1,
                    "word": "Abhor",
                    "meaning": "Regard with disgust and hatred.",
                    "example": "He abhorred sexism in every form.",
                    "synonyms": "despise,loathe,be grossed out by,abominate",
                    "antonyms": "admire,cherish,adore,desire,enjoy"
                },
                {
                    "id": 2,
                    "word": "Bigot",
                    "meaning": "narrow-minded,prejudiced person",
                    "example": "don't let a few small-minded bigots destroy the good image of the city",
                    "synonyms": "dogmatist, partisan, sectarian",
                    "antonyms": "humanitarian,moderate,tolerator,liberal"
                },
                {
                    "id": 3,
                    "word": "Counterfeit",
                    "meaning": "Fake,False",
                    "example": "he knew the tapes to be counterfeits",
                    "synonyms": "fake, forgery, copy, reproduction, replica, imitation, likeness, lookalike, mock-up, dummy, substitute, fraud, sham",
                    "antonyms": "actual,honest,authentic,truthful,real"
                },
                {
                    "id": 4,
                    "word": "Enfranchise",
                    "meaning": "give the right to vote to.",
                    "example": "a proposal that foreigners should be enfranchised for local elections",
                    "synonyms": "give voting rights to, give the vote to, give suffrage to, grant suffrage to, grant franchise to",
                    "antonyms": "incarcerate,hold,restrain,limit,enslave"
                },
                {
                    "id": 5,
                    "word": "Hamper",
                    "meaning": "Hinder",
                    "example": "The complications of Chinese writing greatly hamper education",
                    "synonyms": "clog, cramp, embarrass, encumber, fetter, handicap, hinder, hobble, hog-tie, hold back, hold up, impede, inhibit, interfere (with)",
                    "antonyms": "clear, make way, open, unclog, unplug, unstop,free, liberate, release, untie"
                }
            ];
            wordlist2 = [];
            wordlist3 = [];
            wordlist4 = [];
            wordlist5 = [];
            wordlist6 = [];
            wordlist7 = [];
            wordlist8 = [];
            wordlist9 = [];
            wordlist10 = [];
        }
    }
});

//# sourceMappingURL=app.component.js.map
