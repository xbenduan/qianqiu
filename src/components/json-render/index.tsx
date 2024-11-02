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
    } catch {
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
    <div class="m-2 w-[800px] rounded-box bg-base-200">
      <ul class="flex border-b-2 border-base-100 p-[8px]">
        <div class="flex flex-1 items-center">JSON编辑器</div>
        <form ref={(e) => setForm(e)} class="mr-2 flex items-center gap-2">
          <input
            class="input input-sm w-full"
            placeholder="输入 json 数据"
            name="json"
          />
          <button
            type="submit"
            class="btn btn-secondary btn-sm"
            onclick={(e) => {
              e.preventDefault();
              const f = new FormData(form());
              setJson(f.get('json') as string);
            }}
          >
            确定
          </button>
        </form>
        <div role="tablist" class="tabs-boxed tabs">
          <For each={['编辑', '编码']}>
            {(itme) => (
              <div
                class="tab"
                classList={{ 'tab-active': itme === index() }}
                onclick={() => setIndex(itme)}
              >
                {itme}
              </div>
            )}
          </For>
        </div>
      </ul>

      <div class="flex h-[500px] p-2">
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
              <div class="flex flex-1 flex-col">
                <div class="breadcrumbs text-sm">
                  <ul>
                    <li>
                      <div class="border-b-2 hover:border-white">Home</div>
                    </li>
                    <li>
                      <div>Documents</div>
                    </li>
                    <li>Add Document</li>
                  </ul>
                </div>
                <div class="flex flex-1 overflow-y-hidden">
                  <div class="flex flex-1 flex-col gap-2 overflow-y-auto">
                    <For each={Object.keys(JSON.parse(json()))}>
                      {(itme) => (
                        <div class="flex justify-between rounded-lg bg-base-100 p-2 active:bg-base-200">
                          <div>{itme}</div>
                          <div>{JSON.parse(json())[itme]}</div>
                        </div>
                      )}
                    </For>
                  </div>
                  <div class="mx-2 flex w-[2px] rounded-sm bg-base-100" />
                  <div class="flex-1">22</div>
                </div>
              </div>
            </Match>
            <Match when={index() === '编码'}>
              <div class="flex flex-1 flex-col gap-2">
                <div class="flex flex-1 gap-2">
                  <div class="flex-1 rounded-lg bg-base-100 p-2">{`${data()}`}</div>
                  <div class="flex-1 rounded-lg bg-base-100 p-2">{`${data()}`}</div>
                </div>

                <div class="h-[100px] rounded-lg bg-base-100 p-2">{`${data()}`}</div>
              </div>
            </Match>
          </Switch>
        </Show>
      </div>
    </div>
  );
};

export default JsonRender;
