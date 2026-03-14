import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务条款',
  description: 'SoulDigger 官网服务条款，包含使用规则、知识产权、责任限制与争议处理。',
};

export default function TermsPage() {
  return (
    <main className="section">
      <div className="container policy">
        <h1>服务条款</h1>
        <p className="desc">
          欢迎访问 SoulDigger 官方网站。请在使用本网站前仔细阅读本服务条款（以下简称“本条款”）。
          你访问或使用本网站，即视为你已阅读、理解并同意受本条款约束。
        </p>
        <p className="policy-meta">生效日期：2026-02-26</p>

        <section>
          <h2>一、定义与适用</h2>
          <p>
            本条款适用于 SoulDigger 运营的官网及相关页面服务，包括产品介绍、咨询提交、联系信息展示等。
            若本网站后续增加特定服务，可能另行发布补充规则或专项协议。
          </p>
        </section>

        <section>
          <h2>二、网站使用规则</h2>
          <ul className="list">
            <li>你应合法、合规地访问和使用本网站，不得实施违法违规行为。</li>
            <li>不得通过自动化手段、爬虫或攻击行为干扰网站正常运行。</li>
            <li>不得上传、发布或传播侵权、违法、恶意或不实信息。</li>
            <li>你在咨询表单中提交的信息应真实、准确、完整。</li>
          </ul>
        </section>

        <section>
          <h2>三、咨询与合作说明</h2>
          <p>
            本网站提供的产品信息、案例说明、功能描述仅作为一般性介绍，不构成要约、承诺或保证。
            具体合作内容、交付范围、价格与服务水平，以双方签署的正式合同或订单为准。
          </p>
        </section>

        <section>
          <h2>四、知识产权</h2>
          <ul className="list">
            <li>本网站的文字、图片、设计、标识、代码及相关内容的知识产权归 SoulDigger 或合法权利人所有。</li>
            <li>未经书面许可，任何组织或个人不得擅自复制、传播、修改、镜像、反向工程或用于商业用途。</li>
            <li>你因浏览和咨询而获得的内容，仅限合法、合理、非商业目的使用。</li>
          </ul>
        </section>

        <section>
          <h2>五、第三方链接与服务</h2>
          <p>
            本网站可能包含指向第三方网站或服务的链接。该等第三方由其独立运营，我们无法对其内容、
            安全性及隐私实践承担责任。你访问第三方服务时，应自行评估风险并遵守其规则。
          </p>
        </section>

        <section>
          <h2>六、免责声明与责任限制</h2>
          <ul className="list">
            <li>在法律允许范围内，本网站按“现状”提供，不对持续无中断、绝对无错误作出保证。</li>
            <li>对于因不可抗力、网络故障、系统维护或第三方原因导致的中断或损失，我们将合理努力恢复，但不承担超出法定范围的责任。</li>
            <li>在适用法律允许范围内，我们对间接损失、附带损失、预期收益损失不承担责任。</li>
          </ul>
        </section>

        <section>
          <h2>七、隐私与数据保护</h2>
          <p>
            你在使用本网站过程中提交的个人信息，将按照《隐私政策》处理。请你同时阅读并理解隐私政策内容。
          </p>
        </section>

        <section>
          <h2>八、条款变更</h2>
          <p>
            我们有权根据业务发展或法律法规要求对本条款进行更新。更新后的条款将在本页面发布并标注生效时间。
            你在变更后继续使用本网站，即视为接受更新后的条款。
          </p>
        </section>

        <section>
          <h2>九、适用法律与争议解决</h2>
          <p>
            本条款的订立、执行与解释适用中华人民共和国法律。若因本条款或本网站使用产生争议，
            双方应优先友好协商解决；协商不成的，提交有管辖权的人民法院处理。
          </p>
        </section>

        <section>
          <h2>十、联系我们</h2>
          <ul className="list">
            <li>邮箱：biz@souldigger.cn</li>
            <li>公司：SoulDigger</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
