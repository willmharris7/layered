"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var appTest = require('../server'); // Link to your server file
var supertest = require('supertest');
var request = supertest(appTest);
describe('Test endpoints', function () {
    var _this = this;
    it('returns "Hello From Express" from /api/hello', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/hello')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.express).toBe('Hello From Express');
                    return [2 /*return*/];
            }
        });
    }); });
    it('returns the request message body from /api/world', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .post('/api/world')
                        .send({ name: 'john' })
                        .set('Accept', 'application/json')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.express).toBe('I received your POST request. This is what you sent me: john');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Database endpoints', function () {
    var _this = this;
    it('returns the list of databases in MonboDB Atlas from /api/dbs', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/dbs')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.express).toStrictEqual([
                        'sample_airbnb',
                        'sample_analytics',
                        'sample_geospatial',
                        'sample_mflix',
                        'sample_restaurants',
                        'sample_supplies',
                        'sample_training',
                        'sample_weatherdata',
                        'admin',
                        'local'
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('returns the top 5 listings in the MongoDB database from /api/top5', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/top5')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.express).toStrictEqual([
                        'Ribeira Charming Duplex has 3 bedrooms',
                        'Horto flat with small garden has 1 bedrooms',
                        'Ocean View Waikiki Marina w/prkg has 1 bedrooms',
                        'Private Room in Bushwick has 1 bedrooms',
                        'Apt Linda Vista Lagoa - Rio has 1 bedrooms'
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('returns results with 3 bedrooms given the post body of 3 from /api/bedrooms', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .post('/api/bedrooms')
                        .send({ test_key: '3' })
                        .set('Accept', 'application/json')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.express).toStrictEqual([
                        'Ribeira Charming Duplex has 3 bedrooms',
                        '3 chambres au coeur du Plateau has 3 bedrooms',
                        'Apartamento zona sul do RJ has 3 bedrooms',
                        'Large railroad style 3 bedroom apt in Manhattan! has 3 bedrooms',
                        'Cozy aptartment in Recreio (near Olympic Venues) has 3 bedrooms'
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
});
