<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Linhas de Idioma de Validação
    |--------------------------------------------------------------------------
    |
    | As linhas seguintes contêm as mensagens de erro predefinidas usadas pela
    | classe de validação. Algumas regras têm várias versões, como as regras
    | de tamanho. Sinta-se à vontade para personalizar cada mensagem.
    |
    */

    'accepted' => 'O campo :attribute tem de ser aceite.',
    'accepted_if' => 'O campo :attribute tem de ser aceite quando :other é :value.',
    'active_url' => 'O campo :attribute não é um URL válido.',
    'after' => 'O campo :attribute tem de ser uma data posterior a :date.',
    'after_or_equal' => 'O campo :attribute tem de ser uma data posterior ou igual a :date.',
    'alpha' => 'O campo :attribute só pode conter letras.',
    'alpha_dash' => 'O campo :attribute só pode conter letras, números, traços e sublinhados.',
    'alpha_num' => 'O campo :attribute só pode conter letras e números.',
    'array' => 'O campo :attribute tem de ser um conjunto.',
    'ascii' => 'O campo :attribute só pode conter caracteres alfanuméricos e símbolos de um byte.',
    'before' => 'O campo :attribute tem de ser uma data anterior a :date.',
    'before_or_equal' => 'O campo :attribute tem de ser uma data anterior ou igual a :date.',
    'between' => [
        'array' => 'O campo :attribute tem de ter entre :min e :max itens.',
        'file' => 'O campo :attribute tem de ter entre :min e :max kilobytes.',
        'numeric' => 'O campo :attribute tem de estar entre :min e :max.',
        'string' => 'O campo :attribute tem de ter entre :min e :max caracteres.',
    ],
    'boolean' => 'O campo :attribute tem de ser verdadeiro ou falso.',
    'confirmed' => 'A confirmação do campo :attribute não coincide.',
    'current_password' => 'A palavra-passe está incorreta.',
    'date' => 'O campo :attribute não é uma data válida.',
    'date_equals' => 'O campo :attribute tem de ser uma data igual a :date.',
    'date_format' => 'O campo :attribute não corresponde ao formato :format.',
    'decimal' => 'O campo :attribute tem de ter :decimal casas decimais.',
    'declined' => 'O campo :attribute tem de ser recusado.',
    'declined_if' => 'O campo :attribute tem de ser recusado quando :other é :value.',
    'different' => 'Os campos :attribute e :other têm de ser diferentes.',
    'digits' => 'O campo :attribute tem de ter :digits dígitos.',
    'digits_between' => 'O campo :attribute tem de ter entre :min e :max dígitos.',
    'dimensions' => 'O campo :attribute tem dimensões de imagem inválidas.',
    'distinct' => 'O campo :attribute tem um valor duplicado.',
    'doesnt_end_with' => 'O campo :attribute não pode terminar com um dos seguintes: :values.',
    'doesnt_start_with' => 'O campo :attribute não pode começar com um dos seguintes: :values.',
    'email' => 'O campo :attribute tem de ser um endereço de email válido.',
    'ends_with' => 'O campo :attribute tem de terminar com um dos seguintes: :values.',
    'enum' => 'O :attribute selecionado é inválido.',
    'exists' => 'O :attribute selecionado é inválido.',
    'file' => 'O campo :attribute tem de ser um ficheiro.',
    'filled' => 'O campo :attribute tem de ter um valor.',
    'gt' => [
        'array' => 'O campo :attribute tem de ter mais de :value itens.',
        'file' => 'O campo :attribute tem de ser maior que :value kilobytes.',
        'numeric' => 'O campo :attribute tem de ser maior que :value.',
        'string' => 'O campo :attribute tem de ter mais de :value caracteres.',
    ],
    'gte' => [
        'array' => 'O campo :attribute tem de ter :value itens ou mais.',
        'file' => 'O campo :attribute tem de ser maior ou igual a :value kilobytes.',
        'numeric' => 'O campo :attribute tem de ser maior ou igual a :value.',
        'string' => 'O campo :attribute tem de ter :value caracteres ou mais.',
    ],
    'image' => 'O campo :attribute tem de ser uma imagem.',
    'in' => 'O :attribute selecionado é inválido.',
    'in_array' => 'O campo :attribute não existe em :other.',
    'integer' => 'O campo :attribute tem de ser um número inteiro.',
    'ip' => 'O campo :attribute tem de ser um endereço IP válido.',
    'ipv4' => 'O campo :attribute tem de ser um endereço IPv4 válido.',
    'ipv6' => 'O campo :attribute tem de ser um endereço IPv6 válido.',
    'json' => 'O campo :attribute tem de ser uma string JSON válida.',
    'lowercase' => 'O campo :attribute tem de estar em minúsculas.',
    'lt' => [
        'array' => 'O campo :attribute tem de ter menos de :value itens.',
        'file' => 'O campo :attribute tem de ser menor que :value kilobytes.',
        'numeric' => 'O campo :attribute tem de ser menor que :value.',
        'string' => 'O campo :attribute tem de ter menos de :value caracteres.',
    ],
    'lte' => [
        'array' => 'O campo :attribute não pode ter mais de :value itens.',
        'file' => 'O campo :attribute tem de ser menor ou igual a :value kilobytes.',
        'numeric' => 'O campo :attribute tem de ser menor ou igual a :value.',
        'string' => 'O campo :attribute tem de ter :value caracteres ou menos.',
    ],
    'mac_address' => 'O campo :attribute tem de ser um endereço MAC válido.',
    'max' => [
        'array' => 'O campo :attribute não pode ter mais de :max itens.',
        'file' => 'O campo :attribute não pode ser maior que :max kilobytes.',
        'numeric' => 'O campo :attribute não pode ser maior que :max.',
        'string' => 'O campo :attribute não pode ter mais de :max caracteres.',
    ],
    'max_digits' => 'O campo :attribute não pode ter mais de :max dígitos.',
    'mimes' => 'O campo :attribute tem de ser um ficheiro do tipo: :values.',
    'mimetypes' => 'O campo :attribute tem de ser um ficheiro do tipo: :values.',
    'min' => [
        'array' => 'O campo :attribute tem de ter pelo menos :min itens.',
        'file' => 'O campo :attribute tem de ter pelo menos :min kilobytes.',
        'numeric' => 'O campo :attribute tem de ser pelo menos :min.',
        'string' => 'O campo :attribute tem de ter pelo menos :min caracteres.',
    ],
    'min_digits' => 'O campo :attribute tem de ter pelo menos :min dígitos.',
    'missing' => 'O campo :attribute tem de estar ausente.',
    'multiple_of' => 'O campo :attribute tem de ser um múltiplo de :value.',
    'not_in' => 'O :attribute selecionado é inválido.',
    'not_regex' => 'O formato do campo :attribute é inválido.',
    'numeric' => 'O campo :attribute tem de ser um número.',
    'password' => [
        'letters' => 'O campo :attribute tem de conter pelo menos uma letra.',
        'mixed' => 'O campo :attribute tem de conter pelo menos uma letra maiúscula e uma minúscula.',
        'numbers' => 'O campo :attribute tem de conter pelo menos um número.',
        'symbols' => 'O campo :attribute tem de conter pelo menos um símbolo.',
        'uncompromised' => 'O :attribute fornecido apareceu numa fuga de dados. Escolha outro :attribute.',
    ],
    'present' => 'O campo :attribute tem de estar presente.',
    'prohibited' => 'O campo :attribute é proibido.',
    'prohibited_if' => 'O campo :attribute é proibido quando :other é :value.',
    'prohibited_unless' => 'O campo :attribute é proibido a menos que :other esteja em :values.',
    'prohibits' => 'O campo :attribute proíbe :other de estar presente.',
    'regex' => 'O formato do campo :attribute é inválido.',
    'required' => 'O campo :attribute é obrigatório.',
    'required_array_keys' => 'O campo :attribute tem de conter entradas para: :values.',
    'required_if' => 'O campo :attribute é obrigatório quando :other é :value.',
    'required_if_accepted' => 'O campo :attribute é obrigatório quando :other é aceite.',
    'required_unless' => 'O campo :attribute é obrigatório a menos que :other esteja em :values.',
    'required_with' => 'O campo :attribute é obrigatório quando :values está presente.',
    'required_with_all' => 'O campo :attribute é obrigatório quando :values estão presentes.',
    'required_without' => 'O campo :attribute é obrigatório quando :values não está presente.',
    'required_without_all' => 'O campo :attribute é obrigatório quando nenhum de :values está presente.',
    'same' => 'Os campos :attribute e :other têm de coincidir.',
    'size' => [
        'array' => 'O campo :attribute tem de conter :size itens.',
        'file' => 'O campo :attribute tem de ter :size kilobytes.',
        'numeric' => 'O campo :attribute tem de ser :size.',
        'string' => 'O campo :attribute tem de ter :size caracteres.',
    ],
    'starts_with' => 'O campo :attribute tem de começar com um dos seguintes: :values.',
    'string' => 'O campo :attribute tem de ser texto.',
    'timezone' => 'O campo :attribute tem de ser um fuso horário válido.',
    'unique' => 'O :attribute já está a ser utilizado.',
    'uploaded' => 'O upload do :attribute falhou.',
    'uppercase' => 'O campo :attribute tem de estar em maiúsculas.',
    'url' => 'O campo :attribute tem de ser um URL válido.',
    'ulid' => 'O campo :attribute tem de ser um ULID válido.',
    'uuid' => 'O campo :attribute tem de ser um UUID válido.',

    /*
    |--------------------------------------------------------------------------
    | Mensagens de Validação Personalizadas
    |--------------------------------------------------------------------------
    */

    'custom' => [
        'honeypot' => [
            'max' => 'Submissão bloqueada.',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Nomes de Atributos Personalizados
    |--------------------------------------------------------------------------
    */

    'attributes' => [
        'name' => 'nome',
        'company' => 'empresa',
        'email' => 'email',
        'service' => 'serviço',
        'message' => 'mensagem',
    ],

];
