const questions = [
    { text: "1. 仕事を進めるなら？", options: [{ label: "自分でゼロから作り上げたい", type: "C" }, { label: "誰かのやりたいことを裏で支えたい", type: "S" }] },
    { text: "2. 初対面の人と話すのは？", options: [{ label: "得意。積極的に話しかける", type: "E" }, { label: "どちらかというと聞き役に回るのが好き", type: "M" }] },
    { text: "3. 新しい情報を得た時、どうする？", options: [{ label: "まずは自分で試して、形にしてみる", type: "C" }, { label: "なぜそれが流行っているのか、構造を分析する", type: "S" }] },
    { text: "4. SNSでの発信について", options: [{ label: "自分の顔や名前を出してどんどん発信したい", type: "E" }, { label: "匿名やキャラを使い、有益な情報だけをまとめたい", type: "S" }] },
    { text: "5. トラブルが起きた時の対応は？", options: [{ label: "関わっている人たちの感情や関係性をいち早く修復する", type: "M" }, { label: "二度と同じことが起きないように仕組みを作り直す", type: "S" }] },
    { text: "6. プロジェクトの立ち上げではどちらをやりたい？", options: [{ label: "アイデアを出す、ビジョンを熱く語る", type: "E" }, { label: "スケジュールを引き、現実的にタスクを管理する", type: "M" }] },
    { text: "7. 家での一人の時間", options: [{ label: "一定のルーティンで黙々と作業するのが心地よい", type: "C" }, { label: "常に人と連絡を取り合いながら作業したい", type: "M" }] },
    { text: "8. 文章を書く時、気をつけるのは？", options: [{ label: "自分の想いや情熱が温度感をもって伝わること", type: "E" }, { label: "論理的で、誰が読んでも矛盾なく分かりやすいこと", type: "S" }] },
    { text: "9. 人から褒められて嬉しいのは？", options: [{ label: "「センスがいいね」「技術が高いね」", type: "C" }, { label: "「あの時のサポート助かったよ」「いてくれて良かった」", type: "M" }] },
    { text: "10. 決断する時の最も重要な基準は？", options: [{ label: "過去のデータや他者の成功・失敗事例", type: "S" }, { label: "自分の直感や「これをやりたい」というワクワク感", type: "E" }] },
    { text: "11. ついつい時間を忘れてやってしまうことは？", options: [{ label: "気になったことをとことん調べ尽くすこと", type: "S" }, { label: "気づいたら何かを黙々と手作りしていること", type: "C" }] },
    { text: "12. イベントを企画するなら？", options: [{ label: "メインスピーカーや主役としてステージに立つ", type: "E" }, { label: "会場の手配や参加者の案内など、裏方の運営を取り仕切る", type: "M" }] },
    { text: "13. 完璧主義？", options: [{ label: "細部のクオリティに納得がいくまでこだわり抜きたい", type: "C" }, { label: "8割の完成度でも、まずはスピード重視で世に出したい", type: "E" }] },
    { text: "14. チーム内での心地よい立ち位置", options: [{ label: "特定の専門スキルで貢献する「スペシャリスト」", type: "C" }, { label: "全体を見渡してバランスを調整する「ゼネラリスト」", type: "M" }] },
    { text: "15. 起業において一番大切だと思うのは？", options: [{ label: "失敗のリスクを最小限に抑えるための綿密な戦略", type: "S" }, { label: "人との繋がりやコミュニティの温かさ、信頼関係", type: "M" }] }
];

const resultsData = {
    "C": {
        title: "職人（クリエイター）タイプ",
        description: "あなたの在宅起業における最大の武器は、妥協を許さない「専門性」と「こだわり」です。\n\nゼロから何かを作り出す能力に長けており、他人が容易には真似できないような質の高いサービスや作品を生み出すことができます。多くの人が「これくらいでいいや」と諦めてしまう細部にまで魂を込めることができるため、一度あなたの生み出す世界観に触れたお客様は、熱狂的なファン（リピーター）になる可能性が非常に高いです。\n\nまた、ひとりで黙々と没頭できる集中力は在宅起業という働き方において最強のアドバンテージです。周囲の喧騒に惑わされることなく、自分のペースで最高のパフォーマンスを発揮できる環境を整えることで、ビジネスは一気に軌道に乗るでしょう。\n\n【おすすめの起業スタイル】\n・Webデザイナーや動画編集者としての独立起業\n・独自の世界観を表現したハンドメイド作品の販売\n・高度な専門知識を活かした深いコンテンツ制作（ブログ、電子書籍）\n・デジタルイラストや図解作成など、クリエイティブ代行業\n・オンライン講座の教材作成やデザイン全般の裏方クリエイター\n\n【ワンポイントアドバイス】\n「もっと良いものを作らなきゃ」と完璧さを求めるあまり、発信やリリースが先延ばしになりがちです。「8割の完成度でも、まずは世に出してお客様の反応を見る」という勇気を持つと、あなたの才能はもっと多くの人に届きます！"
    },
    "S": {
        title: "参謀（ストラテジスト）タイプ",
        description: "あなたの在宅起業における最大の武器は、本質を見抜く「分析力」と「仕組み化」のスキルです。\n\n複雑に絡み合った物事の構造を冷静に読み解き、どこを改善すれば効率的か、最短ルートを見つけ出すのが非常に得意です。なんとなく感覚でビジネスをやっている人が多い中で、あなたの「言語化能力」や「体系化する力」は、多くの起業家にとって喉から手が出るほど欲しいスキルです。\n\nあなたは表舞台で目立つよりも、優秀なツールとして機能する仕組みを整えたり、右腕として全体をコントロールすることに喜びを感じるはずです。感情論に流されずデータに基づいた的確なアドバイスができるため、非常に単価の高いビジネスモデルを構築できる可能性を秘めています。\n\n【おすすめの起業スタイル】\n・忙しい起業家や経営者の右腕となるオンラインビジネス秘書\n・LINE公式アカウントやLステップの高度な構築・運用代行\n・データ分析や市場調査に基づくWebマーケティングコンサルタント\n・業務効率化ツール（Notionや自動化ツール）の導入支援\n・ビジネスモデル設計や事業計画の策定サポート業\n\n【ワンポイントアドバイス】\n頭の回転が速く、リスクを先回りして考えるのが得意な反面、「失敗しない完璧な計画」を求めすぎて第一歩が踏み出せなくなることがあります。まずは「テストマーケティング」のつもりで小さく始めてみる思考を取り入れると最強です。"
    },
    "E": {
        title: "伝道師（エヴァンジェリスト）タイプ",
        description: "あなたの在宅起業における最大の武器は、人を惹きつける「情熱」と圧倒的な「発信力」です。\n\n自分の想い、ビジョン、そして経験を自分の言葉で熱く語り、周囲の人を巻き込むエネルギーに満ち溢れています。商品そのものの機能や価格だけでなく、あなた自身の「ストーリー」や「人間性」に人が集まるため、ファンビジネスやコミュニティ運営において右に出る者はいません。\n\n在宅にいながらも、SNSや画面越しにあなたの熱量はしっかりと伝わります。失敗や挫折の経験すらも魅力的な発信コンテンツに変えてしまえる逞しさがあり、応援してくれる仲間と共に事業を大きくしていく、まさにカリスマ的なリーダーになれる天性の素質を持っています。\n\n【おすすめの起業スタイル】\n・自身の経験や克服ストーリーを活かしたコーチング・コンサルティング\n・同じ目標を持つ仲間を集めるオンラインサロンやコミュニティの主宰\n・SNSインフルエンサーやYouTuberとしてのメディア運営・PR業\n・自分の得意を教えるオンラインセミナーやワークショップの講師\n・オリジナルブランド（アパレル、コスメなど）のプロデューサー\n\n【ワンポイントアドバイス】\n新しいアイデアを思い付いてスタートさせるのは大得意ですが、領収書の整理や日々の地道な継続タスクにストレスを感じやすい傾向があります。細かい実務が得意な「参謀」や「調整役」の右腕パートナーを早めに見つけることが劇的な成功の鍵です！"
    },
    "M": {
        title: "調整役（マネージャー）タイプ",
        description: "あなたの在宅起業における最大の武器は、周囲を安心させる「共感力」と「きめ細やかなサポート力」です。\n\n一人ひとりの感情の機微を敏感に察知し、全員が心地よく活動できるように空気を読み、環境を整える天才です。強烈に前に出て「私についてこい！」と引っ張るタイプではないかもしれませんが、あなたがいるだけで組織の空気が柔らかくなり、顧客からの絶対的な信頼とリピートを獲得することができます。\n\n誰かの悩みに寄り添い、人と人とを繋ぐ役割が得意であるため、在宅にいながらも「あたたかいオンライン空間」を作り出すことができます。「あなたが担当で良かった」「あなたにお願いしたい」と指名で仕事が舞い込む、愛され起業家になれる才能があります。\n\n【おすすめの起業スタイル】\n・ホスピタリティを極めた上質なオンラインカスタマーサポート代行\n・コミュニティマネージャーやオンラインサロンの運営・会員ケア\n・人と人を繋ぐオンラインの結婚相談所やマッチングサービス\n・起業家の裏側を支える、寄り添い型の事務サポート業\n・同じ境遇の人を優しくケアするオンラインカウンセラー・傾聴サービス\n\n【ワンポイントアドバイス】\n他人のために頑張ることに喜びを感じるあまり、無意識のうちに自分の時間や体力を削って無理をしてしまうことがあります。長くビジネスを楽しむために、しっかりと「自分のための休む時間」と「提供価値に見合った価格設定」を最初からルール化しておくことが大切です。"
    }
};

let currentQuestionIndex = 0;
let scores = { C: 0, S: 0, E: 0, M: 0 };

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const questionCount = document.getElementById('question-count');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressIndicator = document.getElementById('progress-indicator');
const resultType = document.getElementById('result-type');
const resultDescription = document.getElementById('result-description');
const shareBtn = document.getElementById('share-btn');
const retryBtn = document.getElementById('retry-btn');

// イベントリスナー設定
startBtn.addEventListener('click', () => {
    switchScreen(startScreen, questionScreen);
    showQuestion(0);
});

retryBtn.addEventListener('click', () => {
    // リセット処理
    currentQuestionIndex = 0;
    scores = { C: 0, S: 0, E: 0, M: 0 };
    switchScreen(resultScreen, startScreen);
});

// 画面切り替えアニメーション関数
function switchScreen(from, to) {
    from.classList.remove('active');
    setTimeout(() => {
        from.style.display = 'none';
        to.style.display = 'flex';
        // 少し遅延を入れてCSSアニメーションを発火
        setTimeout(() => {
            to.classList.add('active');
        }, 50);
    }, 400); 
}

// 初期状態での非アクティブ画面の非表示設定
document.addEventListener('DOMContentLoaded', () => {
    questionScreen.style.display = 'none';
    loadingScreen.style.display = 'none';
    resultScreen.style.display = 'none';
});

// 質問の表示
function showQuestion(index) {
    if (index >= questions.length) {
        finishQuiz();
        return;
    }
    
    // スライドアニメーションのトリガー
    questionText.classList.remove('question-slide-in');
    void questionText.offsetWidth; // reflowを強制してアニメーションをリセット
    questionText.classList.add('question-slide-in');

    const q = questions[index];
    questionCount.textContent = `第${index + 1}問 / ${questions.length}`;
    questionText.innerHTML = q.text.replace(/\n/g, '<br>');
    
    // プログレスバーの更新
    progressIndicator.style.width = `${(index / questions.length) * 100}%`;

    // 選択肢の生成
    optionsContainer.innerHTML = '';
    q.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.textContent = opt.label;
        btn.onclick = () => handleAnswer(opt.type);
        optionsContainer.appendChild(btn);
    });
}

// 回答時の処理
function handleAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;
    
    // 即座に次の問題へ遷移
    showQuestion(currentQuestionIndex);
}

// クイズ終了時の処理
function finishQuiz() {
    progressIndicator.style.width = `100%`;
    switchScreen(questionScreen, loadingScreen);
    
    // 1.5秒間ローディング画面を表示して分析している感を出す
    setTimeout(() => {
        showResult();
        switchScreen(loadingScreen, resultScreen);
    }, 1500);
}

// 結果の表示
function showResult() {
    // スコアの最大値を判定
    let maxScore = -1;
    let maxType = "C";
    
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxType = type;
        }
    }
    
    const result = resultsData[maxType];
    
    resultType.textContent = result.title;
    resultDescription.textContent = result.description;
    
    // ThreadsのシェアURL生成
    // ogpのURLがない場合はとりあえず診断完了テキストのみシェア
    const shareText = `私の在宅起業での強みは「${result.title}」でした！\n\n15の質問から在宅起業の隠れた武器を分析する診断はこちら👇\nfrom 五方よし起業道場\n`;
    const appUrl = window.location.href; 
    
    const encodedText = encodeURIComponent(shareText + appUrl);
    shareBtn.href = `https://www.threads.net/intent/post?text=${encodedText}`;
}
