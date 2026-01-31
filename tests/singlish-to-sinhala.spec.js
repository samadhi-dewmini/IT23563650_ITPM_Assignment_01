// @ts-check
import { test, expect } from '@playwright/test';

// Pos_Fun_0001
test('positive statement with manner adverb', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama dhaen eeka hariyatama karanavaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම දැන් ඒක හරියටම කරනවා');
});

// Pos_Fun_0002
test('long mixedlanguage input with slang typo causes incorrect co', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('api 7.45 ta yamu');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අපි 7.45 ට යමු');
});

// Pos_Fun_0003
test('traditional formal greeting with blessing', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('obata dhiirGhaayuSha laebeevaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔබට දීර්ඝායුෂ ලැබේවා');
});

// Pos_Fun_0004
test('singular pronoun with direct object', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama pusthakaalayee sitimi.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම පුස්තකාලයේ සිටිමි.');
});

// Pos_Fun_0005
test('compound sentence with punctuation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama gedhara giyaa, ethakota thamaa thaaththaa aavee.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ගෙදර ගියා, එතකොට තමා තාත්තා ආවේ.');
});

// Pos_Fun_0006
test('interrogative sentence with mixed singlish and english term', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('indhiyaavee Lamuntath social media thahanam veyi?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඉන්දියාවේ ළමුන්ටත් social media තහනම් වෙයි?');
});

// Pos_Fun_0007
test('paragraph formatting with line breaks', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('liyuma liyala ivarayi. dhaen thamaa thaepael karannee');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ලියුම ලියල ඉවරයි. දැන් තමා තැපැල් කරන්නේ');
});

// Pos_Fun_0008
test('convert long descriptive singlish paragraph about sri lanka', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('shrii lQQkaava kiyanne්  harima lassanama ratak. methana thiyena gas kolan saha sundhara parisaraya dhaekkama hithata loku saehalluvak dhaenenavaa. minissu harima karunaavanthayi saha upakaara karanna laedhi. mama haemadhaama magee ratata aadharee. meeka thamaa magee  mavbima kiyala kiyanne් godak garuvath vidhiyata. thava  dheyak thamaa api hamo්ma ekamuthuva inna eka.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ශ්‍රී ලංකාව කියන්නේ  හරිම ලස්සනම රටක්. මෙතන තියෙන ගස් කොලන් සහ සුන්දර පරිසරය දැක්කම හිතට ලොකු සැහල්ලුවක් දැනෙනවා. මිනිස්සු හරිම කරුනාවන්තයි සහ උපකාර කරන්න ලැදි. මම හැමදාම මගේ රටට ආදරේ. මේක තමා මගේ  මව්බිම කියල කියන්නේ ගොඩක් ගරුවත් විදියට. තව  දෙයක් තමා අපි හමෝම එකමුතුව ඉන්න එක.');
});

// Pos_Fun_0009
test('complex sentence with past tense', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama gihin thibba potha aran aavaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ගිහින් තිබ්බ පොත අරන් ආවා');
});

// Pos_Fun_0010
test('mixed language with brand terms', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('magee phone eka kaedilaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මගේ phone එක කැඩිලා.');
});

// Pos_Fun_0011
test('place names and common words', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('colombo yanna bus eka.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('colombo යන්න bus එක.');
});

// Pos_Fun_0012
test('complex sentence with nested negation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('oyaa kivvath mama eeka kalee nae kiyala thamaa hithennee.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයා කිව්වත් මම ඒක කලේ නැ කියල තමා හිතෙන්නේ.');
});

// Pos_Fun_0013
test('complex sentence with relative clause', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('oyaa dhunna potha mama kiyavapu nisaa mata eeka therunaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයා දුන්න පොත මම කියවපු නිසා මට ඒක තෙරුනා.');
});

// Pos_Fun_0014
test('formatting with line breaks', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('suba raathriyak! heta hamuvemu.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('සුබ රාත්‍රියක්! හෙට හමුවෙමු.');
});

// Pos_Fun_0015
test('newsstyle sentence with numeric currency value', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('kaanthaavak biya ganvaa rupiyal lakSha 15ka mudhalak kollakaalaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('කාන්තාවක් බිය ගන්වා රුපියල් ලක්ෂ 15ක මුදලක් කොල්ලකාලා');
});

// Pos_Fun_0016
test('pronoun variation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('eyaalaa adha ennee naee.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('එයාලා අද එන්නේ නෑ.');
});

// Pos_Fun_0017
test('sentence with english abbreviations', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('Documents tika attach karalaa mata email ekak evanna');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Documents ටික attach කරලා මට email එකක් එවන්න');
});

// Pos_Fun_0018
test('input with punctuation marks', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('wow! oya hari?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('wow! ඔය හරි?');
});

// Pos_Fun_0019
test('long conversational paragraph', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('api yesterday gedhara aevith, bath kaalaa, tv balalaa, passe nidhagaththaa. heta udheeta aayee vaedata yanna thiyena nisa loku avulak');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අපි yesterday ගෙදර ඇවිත්, බත් කාලා, tv බලලා, පස්සෙ නිදගත්තා. හෙට උදේට ආයේ වැඩට යන්න තියෙන නිස ලොකු අවුලක්');
});

// Pos_Fun_0020
test('technical term embedded', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('online class ekakata join unaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('online class එකකට join උනා');
});

// Pos_Fun_0021
test('complex interrogative sentence with proper names and informa', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('hindhi saha beQQgaali sQQgiithayee loku kenek vuNu arijith siQQ background singing eken ivath velaadha?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('හින්දි සහ බෙංගාලි සංගීතයේ ලොකු කෙනෙක් වුණු අරිජිත් සිං background singing එකෙන් ඉවත් වෙලාද?');
});

// Pos_Fun_0022
test('slang expression', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('vaedee hari avul');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('වැඩේ හරි අවුල්');
});

// Pos_Fun_0023
test('currency value handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mee eka rupiyal 500 k dhaalaa podi investment ekak karanna balanna oonee');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මේ එක රුපියල් 500 ක් දාලා පොඩි investment එකක් කරන්න බලන්න ඕනේ');
});

// Pos_Fun_0024
test('complex informal sentence with punctuation and negation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('ee gavuma hari lassanayi, eeth loku naee, ,eeka nisaa gaththee naee');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඒ ගවුම හරි ලස්සනයි, ඒත් ලොකු නෑ, ,ඒක නිසා ගත්තේ නෑ');
});

// Neg_Fun_0001
test('sentence with time formatand embedded english term', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('api 5.30 ta hambavemu.oyaa edhdhi text ekak dhaanna');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අපි 5.30 ට හම්බවෙමු.ඔයා එද්දි text එකක් දාන්න');
});

// Pos_Fun_0026
test('plural noun handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('Lamayi iskoolee yanavaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ළමයි ඉස්කෝලේ යනවා');
});

// Pos_Fun_0027
test('compound sentence with connector and embedded english words', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama office giyaa saha yaluvaa hambunaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම office ගියා සහ යලුවා හම්බුනා');
});

// Pos_Fun_0028
test('mixed brand name', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama Samsung foon ekak gaththaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම Samsung ෆෝන් එකක් ගත්තා');
});

// Pos_Fun_0029
test('convert informal slang with mixed english content', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mokadha bQQ vennee? text ekakvath naee');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මොකද බං වෙන්නේ? text එකක්වත් නෑ');
});

// Pos_Fun_0030
test('short informal sentence with mixed sinhalaenglish phrases', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama udhee nagitala tea bonna gaththaa. passe laptop eka open karaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම උදේ නගිටල tea බොන්න ගත්තා. පස්සෙ laptop එක open කරා');
});

// Pos_Fun_0031
test('mixed singlish sentence with technical term', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama IT course ekak karanavaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම IT course එකක් කරනවා');
});

// Neg_Fun_0002
test('englishonly input', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('We will meet tomorrow');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('No translation');
});

// Neg_Fun_0003
test('numericonly input', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('99999');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('No translation');
});

// Neg_Fun_0004
test('symbol mixed with text', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama % gedara');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Partial or failed translation');
});

// Neg_Fun_0005
test('excessively repeated slang', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('supiri supiri supiri supiri supiri supiri supiri supiri supiri supiri');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Performance degradation or truncation');
});

// Neg_Fun_0006
test('mixed unrelated symbols and words', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill(' _@@gedara');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Partial or failed translation');
});

// Neg_Fun_0007
test('incorrect vowel spelling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('suba dawasak');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Misspelled Sinhala output');
});

// Neg_Fun_0008
test('excessively long repeated text', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('hari hari hari hari hari hari hari hari hari hari hari hari hari hari hari hari hari hari hari hari');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Possible truncation or slowdown');
});

// Neg_Fun_0009
test('incorrect vowel mapping', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('suba udasanak');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Incorrect Sinhala spelling');
});

// Neg_UI_0001
test('realtime transliteration for long input with complex structu', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('oyaa kiuvoth mama gedhara giya passe podi nidahaseyak gannawa kiyala hithuwa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයා කිව්වොත් මම ගෙදර ගියා පස්සේ පොඩි නිදහසයක් ගන්නවා කියලා හිතුවා');
});