/*4. escreva uma query SQL para obter o total de registros de uma tabela chamada vendas

eu primeiramente pensei que a questão pedia o retorno da tabela, porem já que pede o total de 
registro, contar o primary key me parece ser o ideal*/
SELECT COUNT(codigo)
FROM vendas;

/*5. sabendo que a tabela vendas possui três colunas, codigo(int), produto(varchar(10)) e valor(INT)
escreva uma query SQL para somar os valores vendidos por produto */

SELECT produto ,SUM(valor)
FROM TABLE vendas
WHERE Produto = 'CELULAR'

SELECT produto ,SUM(valor)
FROM TABLE vendas
WHERE Produto = 'PULSEIRA'

SELECT produto ,SUM(valor)
FROM TABLE vendas
WHERE Produto = 'RELOGIO'

SELECT produto ,SUM(valor)
FROM TABLE vendas
WHERE Produto = 'TABLET'