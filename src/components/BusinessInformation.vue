<script setup lang="ts" name="TokushohouComponent"></script>

<template>
  <div class="tokushoho">
    <h1>特定商取引法に基づく表示</h1>

    <h2>1. 販売事業者名</h2>
    <p>飯田 集志(個人事業主）</p>

    <h2>2. 代表者名</h2>
    <p>飯田 集志</p>
    <h2>3. 所在地</h2>
    <p>請求があった場合、遅滞なく開示いたします。</p>

    <h2>4. 連絡先</h2>
    <p>電話番号:請求があった場合、遅滞なく開示いたします。</p>
    <p>メールアドレス: iida.atsushi.fh@gmail.com</p>

    <h2>5. 販売価格、送料、その他費用</h2>
    <p>
      サービスの利用料金は、各サービスページに記載された価格に基づきます。<br />
      SaaS（ソフトウェア・サービス）の提供であるため、送料は発生しません。<br />
      その他費用が必要な場合は、別途明記します。
    </p>

    <h2>6. 支払い方法</h2>
    <p>クレジットカード（Stripeを利用）、Apple Pay、Google Pay</p>

    <h2>7. 交換および返品（返金ポリシー）</h2>
    <p>
      当サービスはサブスクリプション形式で提供されているため、原則として以下のポリシーに基づいて運用されます。
    </p>

    <h3>1. 解約について</h3>
    <ul>
      <li>
        サブスクリプションを解約する場合、LINE上で「解約」と送信し、続けて「はい、私は解約します」と返信してください。
      </li>
      <li>
        解約手続きが完了しない場合は、お問い合わせフォームよりご連絡ください。
      </li>
    </ul>

    <h3>2. 返金ポリシー</h3>
    <ul>
      <li>一度お支払いいただいた料金は、原則として返金できません。</li>
      <li>
        サービスに重大な不備がある場合には、個別対応を検討いたします。まずはお問い合わせフォームよりご連絡ください。
      </li>
    </ul>

    <h3>3. 注意事項</h3>
    <ul>
      <li>解約手続きの完了タイミングによっては、次回請求が発生する場合があります。</li>
      <li>次回以降の請求を停止する形で対応させていただきます。</li>
    </ul>
  </div>
</template>

<style scoped>
.tokushoho {
  margin: 50px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.tokushoho h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.tokushoho h2 {
  font-size: 1.5rem;
  margin-top: 20px;
  color: #444;
}

.tokushoho p {
  font-size: 1rem;
  margin: 10px 0;
  line-height: 1.6;
}

.tokushoho a {
  color: #007bff;
  text-decoration: underline;
}

.tokushoho a:hover {
  text-decoration: none;
  color: #0056b3;
}
</style>
