import { createSignal, For, Match, Show, Switch } from 'solid-js';

const JsonRender = () => {
  const [index, setIndex] = createSignal('编码');
  const [json, setJson] = createSignal(`{
                "attrKey": "颜色",
                "attrType": "ssss",
                "attrValue": "黑色",
                "ids": "123",
                "gmtCreate": 123,
                "gmtModified": 5,
                "id": "12322"
            }`);
  const [form, setForm] = createSignal<HTMLFormElement>();

  const data = () => {
    try {
      return JSON.parse(json());
    } catch (error) {
      return '';
    }
  };

  const showConsole = () => {
    if (json() === '') {
      return '请输入 JSON 数据';
    }

    if (typeof data() !== 'object') {
      return `你输入的值：${json()}，不是 JSON 格式`;
    }

    return 'show';
  };

  return (
    <div class="w-[800px] rounded-box bg-base-200 m-2">
      <ul class="flex p-[8px] border-b-2 border-base-100">
        <div class="flex items-center flex-1">JSON编辑器</div>
        <form ref={(e) => setForm(e)} class="flex gap-2 items-center mr-2">
          <input
            class="input input-sm w-full"
            placeholder="输入 json 数据"
            name="json"
          />
          <button
            type="submit"
            class="btn btn-sm btn-secondary"
            onclick={(e) => {
              e.preventDefault();
              const f = new FormData(form());
              setJson(f.get('json') as string);
            }}
          >
            确定
          </button>
        </form>
        <div role="tablist" class="tabs tabs-boxed">
          <For each={['编辑', '编码']}>
            {(itme) => (
              <div
                class="tab "
                classList={{ 'tab-active': itme === index() }}
                onclick={() => setIndex(itme)}
              >
                {itme}
              </div>
            )}
          </For>
        </div>
      </ul>

      <div class="flex p-2 h-[500px]">
        <Show
          when={showConsole() === 'show'}
          fallback={
            <div class="mx-auto my-1 text-center">
              <div>{showConsole()}</div>
            </div>
          }
        >
          <Switch fallback={<div>请输入正确的格式</div>}>
            <Match when={index() === '编辑'}>
              <div class="flex-1 flex flex-col">
                <div class="breadcrumbs text-sm">
                  <ul>
                    <li>
                      <div class="border-b-2 hover:border-white ">Home</div>
                    </li>
                    <li>
                      <div>Documents</div>
                    </li>
                    <li>Add Document</li>
                  </ul>
                </div>
                <div class="flex flex-1 overflow-y-hidden">
                  <div class="flex-1 flex flex-col gap-2 overflow-y-auto">
                    <For each={Object.keys(JSON.parse(json()))}>
                      {(itme) => (
                        <div class="flex justify-between bg-base-100 rounded-lg p-2 active:bg-base-200">
                          <div>{itme}</div>
                          <div>{JSON.parse(json())[itme]}</div>
                        </div>
                      )}
                    </For>
                  </div>
                  <div class="w-[2px] rounded-sm bg-base-100 flex mx-2" />
                  <div class="flex-1">22</div>
                </div>
              </div>
            </Match>
            <Match when={index() === '编码'}>
              <div class="flex flex-col gap-2 flex-1">
                <div class="flex flex-1 gap-2">
                  <div class="bg-base-100 rounded-lg flex-1 p-2">{`${data()}`}</div>
                  <div class="bg-base-100 rounded-lg flex-1 p-2">{`${data()}`}</div>
                </div>

                <div class="bg-base-100 rounded-lg p-2 h-[100px]">{`${data()}`}</div>
              </div>
            </Match>
          </Switch>
        </Show>
      </div>
    </div>
  );
};

export default JsonRender;
